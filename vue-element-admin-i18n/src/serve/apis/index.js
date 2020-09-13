import platformApis from '../apis/platform';
import articleApis from '../apis/article';
import plateApis from '../apis/plate';
import roleApis from '../apis/role';
import recommendApis from '../apis/recommend';
import bannerApis from '../apis/banner';
import sildeshowApis from '../apis/slideshow';

const APIS = {
	...platformApis,
	...articleApis,
	...plateApis,
	...roleApis,
	...recommendApis,
	...bannerApis,
	...sildeshowApis
};
export default APIS;
