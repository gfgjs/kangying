<template>
	<view>
		<view class="header box-shadow">
			<view class="tab" v-for="(item,index) in tabs" :key='item' @click="switchTab(index)">
				<view class="">{{item}}</view>
				<view class="bar linear-background" :style="currTab==index&&'opacity:1'"></view>
			</view>
		</view>
		<!-- 占位符 -->
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>

		<view class="content">
			<mineCaseList @cardChange='cardChange' :list='caseList' v-if='currTab==0'></mineCaseList>
			<noData v-if='currTab==1'></noData>
			<view v-if='currTab==2'>
				<view class='med-list'>
					<!-- 注意事项: 不能使用 index 作为 key 的唯一标识 -->
					<view class='med-cell' v-for="(item, index) in prescriptionList" :key="'med_cell_'+item.Record.id+Math.random()"
					 @click='viewMedList(item)'>
						<view class="left">
							<view>患者姓名：{{item.Record.p_name}} {{formatDate(item.Record.create_time).slice(5,10)+' '+formatMinute(item.Record.create_time)}}</view>
							<view>处方医生：{{item.Record.d_name}} {{item.Record.dept}}</view>
						</view>
						<uni-icons type="arrowright"></uni-icons>
					</view>
				</view>
			</view>
			<noData v-if='currTab==3'></noData>
		</view>

		<uni-popup ref="viewPanel" class="view-panel">
			<scroll-view scroll-y class="content">
				<view class="item-content" v-for="(item,index) in viewItemList" :key="'med_'+index">
					<view class="left">
						<view class="name">{{item.GoodsInfo.m_name}}</view>
						<view class="bottom-row">
							<view class="norm">规格：{{item.GoodsInfo.spec}} 数量：{{item.GoodsNumber}}</view>
						</view>
						<view class="bottom-row">
							<view class="norm">医嘱：{{item.Guide}}</view>
						</view>
					</view>
					<view class="little-title" @click="previewImage([item.GoodsInfo.instructions])">查看说明</view>
					<!-- <uni-icons type="plus-filled" size="24" class="icon" @click="addMedToTemp(item)"></uni-icons> -->
				</view>
			</scroll-view>
		</uni-popup>
		<uni-popup ref="agreement" class="view-panel">
			<view class="agreement">
				<view class="title" style="text-align: center;padding: 10px 0;">互联网诊疗风险告知及知情同意书</view>
				<textarea :value="agree" disabled></textarea>
				<view class="buttons">
					<view class="button button-cancel" @click="disAgree">不同意</view>
					<view class="button" @click="agreement">同意</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import mineCaseList from '../../components/mine-case-list.vue'
	import noData from '../../components/nodata.nvue'
	import {
		request_recordList,
		request_prescriptionList
	} from '../../common/https.js'
	import {
		formatDate,
		formatMinute
	} from '../../common/util.js'
	export default {
		components: {
			mineCaseList,
			noData
		},
		data() {
			return {
				tabs: ['我的病历', '我的挂号', '电子处方', '检查报告'],
				currTab: 0,
				caseList: [],
				currentCardId: '',
				prescriptionList: [],
				viewItemList: [],
				formatDate,
				formatMinute,
				agree: `根据《互联网诊疗管理办法（试行）》《互联网医院管理办法（试行）》、《远程医疗服务管理办法（试行）》等法规的要求，患者应知晓互联网诊疗相关的执业规则并接受风险告知和签署知情同意书，知情同意书等文件可以以电子文件形式签订。
互联网诊疗服务规范及风险告知
互联网诊疗开展部分常见病、慢性病复诊和“互联网+”家庭医生签约服务。互联网医院开展部分常见病、慢性病复诊时，医师应当掌握患者病历资料，确定已有明确诊断后，针对相同诊断进行复诊并开具处方。互联网医院可以提供家庭医生签约服务，可以委托符合条件的第三方机构配送药品，可以开展远程医疗服务。
互联网医院可以提供药品配送相关的服务，但实际服务提供方为合作第三方。相关的服务质量和售后保障实际由第三方负责。
互联网医院可以为患者提供“互联网+”家庭医生签约服务或远程医疗服务。患者应遵守相关的服务流程和约定。
互联网医院不能开具麻醉药品、精神类药品处方，以及其他用药风险较高，有其他特殊管理规定的药品处方。为6岁以下的儿童开具用药处方时，应当有监护人和相关专业医师陪伴。
互联网医院应妥善保管信息，不得非法买卖和泄露信息，并在发现信息泄露时，积极上报。
当患者出现病情变化需要医务人员亲自诊查或其他不宜进行在线诊疗服务情形时，互联网诊疗活动应当立即终止，互联网医院应引导患者到实体医疗机构就诊。
互联网诊疗、家庭医生签约、远程医疗服务潜在风险告知
接受互联网诊疗、家庭医生签约、远程医疗服务可能出现以下潜在风险(有些不常见的风险未能一一列出，如果患者有疑问应与医生讨论) :
受限于互联网诊疗本身的局限性（如互联网医院无法直接进行体格检查、检验或医疗仪器设备辅助诊断，不能面诊、触诊等，也无法通过相关的诊查手段及检查、检验结果准确判断病情的进展），医生给出的本次诊疗方案、健康管理方案、远程医疗方案依赖于患者的描述及其上传的资料，以及既往的病历资料、临床诊断。如前述信息不准确或不全面，将对本次诊疗方案的合理制定产生一定的影响。
提供互联网诊疗、家庭医生服务、远程医疗服务的医生，可能来自于实体医疗机构中的不同级别、性质的医院，执业年限及经验不一。互联网医院的分诊导诊及医患匹配体系已根据患者的需求尽力匹配合适的医生为患者提供服务。患者可以自行选择医生，但受限于医生的执业经验及背景，医生给诊疗方案的合理性和先进性可能存在差异。
由于疾病本身的特殊性和复杂性，患者本身的体质状况，及现有医疗水平条件的限制等，存在发生各种并发症和危害自身生命健康的意外风险的可能。由于疾病本身的复杂性，以及诊疗措施疗效出现的延后性，诊疗方案、健康管理方案、远程医疗方案可能不会达到患者期待的效果，且有些疾病或并发症是不可根治的，需要患者积极配合，长期坚持治疗，才能延缓疾病的进展。医生已经尽力为患者制定合理的方案，致力减少药物治疗不良反应的发生，但不可能完全避免，且不可预测，需要在患者的配合下，并根据临床情况不断调整方案。
疾病的治愈需要患者谨遵医嘱、健康管理方案，并积极配合。如果患者未完全遵守和配合，则可能导致诊疗效果不理想，甚至出现病情反复、恶化等不良后果。
配送药品可能受到物流时效的影响，导致患者延时服用药物，或患者正在用药物或者手术等治疗其他疾病，也可能存在延时用药、联合用药等风险。
患者自采药品的品牌、规格、性状、使用方式等可能影响本次诊疗方案的效果，同时还可能出现危害生命健康的风险。
医生主要解决本专业领域的医疗问题，非本专业的疾病需要到其它专业科室进行诊治或接受远程医疗服务。
“互联网+”家庭医生签约服务对持续维护健康具有必要性（如患者难以提供全部既往的诊疗资料，则可能导致健康档案在使用时因资料收集不全而存在潜在风险。
互联网医院对患者的信息按要求采取了保密措施，但泄密的可能性依然不能完全消除。
患者的医疗文件和诊疗数据，独属于医疗机构，可能被用于研究（包括但不限于大数据研究），患者并不能从中直接受益。
患者在接受后续服务前，知情、同意并且确认：
我确认在互联网医院上问诊的疾病，已经在实体医疗机构明确诊断，我已经提供或上传我所能提供的相关的病历资料，愿意接受互联网诊疗。
我确认既往发生过与本次发病类似的常见病、慢性病病症，并曾经在实体医院诊疗。我愿意接受互联网医院提供的“互联网+”家庭医生签约服务，并协助医生完善健康档案。
我确认愿意接受医生根据诊疗经验为患者安排的远程医疗服务。
我确认已经知晓并同意以上全部内容，理解相关的风险，愿意接受互联网医院的服务以及接受疾病诊疗服务，并签署本知情同意书。
我确认未得到服务结果会百分之百成功的许诺。
我同意诊疗内容在去除姓名、头像、出生日期等信息后将设置为默认展示，医生给予的指导建议同时也会帮助其他相似情况的患者。`
			};
		},
		onPullDownRefresh() {
			// this.refresh()
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)
		},
		onLoad(e) {
			// this.switchTab(e.tab || 0)
			this.currTab = e.tab
			// this.refresh()


			if (e.tab == 2) {
				request_prescriptionList({
					uni
				}).then(res => {
					if (res.code === 0) {
						this.prescriptionList = res.data || []
					}
				})
			}
		},
		methods: {
			agreement(){
				this.$refs.agreement.close()
				this.$refs.viewPanel.open()
			},
			disAgree(){
				this.$refs.agreement.close()
			},
			previewImage(urls) {
				uni.previewImage({
					urls
				})
			},
			viewMedList(item) {
				this.$pageTo({
					url:'/pages/doctor/prescript',
					options:{id:item.Id,PayStatus:item.PayStatus}
				})
				return
				this.viewItemList = item.Goods
				if (1) {
					this.$refs.agreement.open()
				} else {

					this.$refs.viewPanel.open()
				}

			},
			cardChange(e) {
				// this.currentCardId = e
				// this.refresh()
			},
			refresh() {
				request_recordList({
					uni,
					card_id: this.currentCardId
				}).then(res => {
					this.caseList = res.data
				})
			},
			switchTab(index) {
				this.$pageTo({
					url: '/pages/doctor/case',
					options: {
						tab: index
					}
				})
				// this.currTab = index
			}
		}
	}
</script>

<style lang="scss">
	page {
		// background-color: #f6f6f6;
		position: relative;
	}

	.common-place {
		background-color: rgba(247, 251, 255, 1);
	}

	.header {
		padding: 0 20px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		width: 100%;
		left: 0;
		z-index: 1;
		background-color: white;

		.tab {
			display: flex;
			justify-content: center;
			font-size: 15px;

			.bar {
				height: 3px;
				width: 28px;
				border-radius: 2px;
				background-color: $base-color;
				position: absolute;
				bottom: 0;
				opacity: 0;
				transition: .1s linear all;
			}
		}

		.tab:active {
			opacity: .5;
		}

	}

	.content {
		// padding: 50px 15px 40px;
		width: 100%;

		.med-list {
			width: 100%;

			.med-cell {
				border-bottom: 1px solid #eeeeee;
				width: 100%;
				margin: 0 auto;
				font-size: 14px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 60px;
				padding: 5px 20px;

				.left {
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}
			}
		}
	}

	.view-panel {
		.agreement {
			height: 80vh;
			width: 90vw;
			background-color: white;
			border-radius: 4px;
			display: flex;
			flex-direction: column;

			textarea {
				flex: 1;
				padding: 10px;
				width: 100%;
			}

			.buttons {
				display: flex;
				justify-content: space-around;
				padding-bottom: 10px;
			}

			// overflow-y: scroll;
		}


		.content {
			height: 80vh;
			width: 90vw;
			background-color: white;
			border-radius: 4px;
			overflow: hidden;


			.little-title {
				color: $base-color;
				font-size: 16px;
			}

			.item-content {
				padding: 10px 10px;
				font-size: 14px;
				height: auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid #e5e5e5;

				.left {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					height: 100%;

					.name {
						width: 55vw;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}

					.bottom-row {
						display: flex;
						justify-content: space-between;
					}
				}

				.icon {
					color: $base-color !important;
				}
			}

			.item-content:first-of-type {
				border-top: 1px solid #e5e5e5;
			}

			.item-content:last-of-type {
				// border: none;
			}
		}

	}
</style>
