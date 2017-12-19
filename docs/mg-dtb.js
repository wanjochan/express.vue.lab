//TODO @ref https://vuejs.org/v2/examples/grid-component.html
//TODO dtb-pager dtb-search-bar etc
Vue.component('mg-dtb',{
	props: ['conf'],
	template:'<table :class="cls"><tr><th v-for="td in conf.cols" :width="td.width" :align="td.align">{{td.title}}</th></tr><tr v-for="row in conf.rows"><td v-for="td in conf.cols" :width="td.width" :align="td.align" :colspan="td.colspan||1" :rowspan="(row[td.dataIndx]||{}).rowspan||1">{{row[td.dataIndx]}}</td></tr></table>',
	computed:{
		cls:function(){
			var _prefix='mg-dtb';
			var _cls=_prefix;
			var _conf=this.conf;
			if(_conf){
				if(_conf.cls){ _cls+=' '+_conf.cls; }
				if(_conf.disabled){ _cls+=' '+_prefix+'-disabled'; }
				if(_conf.readonly){ _cls+=' '+_prefix+'-readonly'; }
			}
			return _cls;
		}
	},
})

