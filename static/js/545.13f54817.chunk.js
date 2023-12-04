"use strict";(self.webpackChunkmovie_world=self.webpackChunkmovie_world||[]).push([[545],{1827:(e,s,i)=>{i.d(s,{Z:()=>B});i(259);var n=i(4995),a=i(9565),t=i(8827),l=i(4574),r=i(2771),o=i(5701),A=i.n(o),m=i(8236),d=i.n(m),c=i(6080),p=i.n(c),x=i(6850),h=i.n(x),C=i(7182),g=i.n(C),u=i(9213),D=i.n(u),v=i(3895),f={};f.styleTagTransform=D(),f.setAttributes=h(),f.insert=p().bind(null,"head"),f.domAPI=d(),f.insertStyleElement=g();A()(v.Z,f);v.Z&&v.Z.locals&&v.Z.locals;var b=i(2014);const w=(0,n.cn)("Details"),B=e=>{let{poster:s,title:i,overview:n,details:o}=e;return(0,b.jsxs)("div",{className:(0,a.classnames)(w()),children:[(0,b.jsx)("div",{className:(0,a.classnames)(w("Column",{left:!0})),children:(0,b.jsx)("figure",{className:(0,a.classnames)(w("Figure")),children:(0,b.jsx)("picture",{className:(0,a.classnames)(w("Picture")),children:(0,b.jsx)(t.Z,{className:w("Poster"),image:(0,l.A)(s,r.MD.w342),width:342,height:513})})})}),(0,b.jsxs)("div",{className:(0,a.classnames)(w("Column",{right:!0})),children:[(0,b.jsx)("h2",{className:(0,a.classnames)(w("Title")),children:i}),(0,b.jsx)("p",{className:(0,a.classnames)(w("Overview")),children:n}),(0,b.jsx)("table",{className:(0,a.classnames)(w("Table")),children:(0,b.jsx)("tbody",{children:o&&o.map((e=>(0,b.jsxs)("tr",{className:(0,a.classnames)(w("TableRow")),children:[(0,b.jsx)("td",{className:(0,a.classnames)(w("TableData")),children:e.detailName}),(0,b.jsx)("td",{className:(0,a.classnames)(w("TableData")),children:e.detailValue||"Unknown"})]},e.detailName)))})})]})]})}},5545:(e,s,i)=>{i.r(s),i.d(s,{default:()=>C});var n=i(259),a=i(6641),t=i(7386),l=i(8161),r=i(7736),o=i(9461),A=i(1827);function m(e){return e.person.personDetails}var d=i(7319),c=i(747);const p=e=>{switch(e){case 1:return"female";case 2:return"male";default:return"unknown"}};var x=i(8986),h=i(2014);const C=()=>{var e,s;const i=(0,a.useDispatch)(),C=(0,t.useParams)(),g=(0,a.useSelector)(m);(0,n.useEffect)((()=>(i((0,o.mg)(Number(C.id))),()=>{i((0,o.KP)())})),[i,C]),(0,n.useEffect)((()=>{document.title="".concat((null===g||void 0===g?void 0:g.name)||"Person page"),console.log(g)}),[g]);const u=[{detailName:"Also knows as",detailValue:null===(D=g)||void 0===D?void 0:D.also_known_as.join(", ")},{detailName:"Birthday",detailValue:(null===D||void 0===D?void 0:D.birthday)&&new Date(D.birthday).toDateString()},{detailName:"Place of birth",detailValue:null===D||void 0===D?void 0:D.place_of_birth},{detailName:"Deathday",detailValue:(null===D||void 0===D?void 0:D.deathday)&&new Date(D.deathday).toDateString()},{detailName:"Gender",detailValue:(null===D||void 0===D?void 0:D.gender)&&p(D.gender)},{detailName:"Biography",detailValue:null===D||void 0===D?void 0:D.biography}];var D;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(l.Z,{className:(0,d.b)({withPaddings:!0}),children:[g&&(0,h.jsx)(A.Z,{title:g.name,poster:g.profile_path,details:u}),null!==g&&void 0!==g&&null!==(e=g.movie_credits)&&void 0!==e&&e.cast?(0,h.jsx)(x.Z,{className:(0,c.b)({noPaddings:!0}),title:"Known for",cast:null===g||void 0===g||null===(s=g.movie_credits)||void 0===s?void 0:s.cast}):null]}),(0,h.jsx)(r.Z,{})]})}},3895:(e,s,i)=>{i.d(s,{Z:()=>r});var n=i(922),a=i.n(n),t=i(882),l=i.n(t)()(a());l.push([e.id,"@media(min-width: 1024px){.Details{display:flex}}.Details-Column_left{display:none}@media(min-width: 1024px){.Details-Column_left{width:342px;height:513px;margin-right:30px;flex-shrink:0;display:block}}@media(min-width: 1024px){.Details-Column_right{max-width:1000px}}.Details-Title{font-size:18px;line-height:28px;font-weight:400;margin:0 0 10px}@media(min-width: 1024px){.Details-Title{font-size:24px;line-height:38px}}.Details-Overview{font-size:15px;line-height:24px;margin-bottom:30px}@media(min-width: 1024px){.Details-Overview{font-size:16px}}.Details-Table{font-size:15px;line-height:24px}@media(min-width: 1024px){.Details-Table{font-size:16px}}.Details-TableData{text-transform:capitalize;vertical-align:top}.Details-TableData:first-of-type{padding-right:15px;box-sizing:border-box}@media(min-width: 1024px){.Details-TableData:first-of-type{white-space:nowrap;padding-right:50px}}","",{version:3,sources:["webpack://./src/assets/sass/mixins/media.sass","webpack://./src/components/ui/AppDetails/AppDetails.sass","webpack://./src/assets/sass/mixins/bem.sass"],names:[],mappings:"AACE,0BAAA,SCmBE,YAAA,CAAA,CCXF,qBDeI,YAAA,CDvBJ,0BEQA,qBDkBM,WAAA,CACA,YAAA,CACA,iBAAA,CACA,aAAA,CACA,aAAA,CAAA,CD9BN,0BEQA,sBD0BM,gBAAA,CAAA,CC9BN,eDiCE,cAAA,CACA,gBAAA,CACA,eAAA,CACA,eAAA,CDxCF,0BEIA,eDuCI,cAAA,CACA,gBAAA,CAAA,CCxCJ,kBD2CE,cAAA,CACA,gBAAA,CACA,kBAAA,CDjDF,0BEIA,kBDgDI,cAAA,CAAA,CChDJ,eDmDE,cAAA,CACA,gBAAA,CDxDF,0BEIA,eDuDI,cAAA,CAAA,CCvDJ,mBD0DE,yBAAA,CACA,kBAAA,CAEA,iCACE,kBAAA,CACA,qBAAA,CDnEJ,0BCiEE,iCAKI,kBAAA,CACA,kBAAA,CAAA",sourcesContent:["=media($args...)\n  @media (min-width: $args)\n    @content\n","@import '../../../assets/sass/global/variables'\n@import '../../../assets/sass/mixins/media'\n@import '../../../assets/sass/mixins/ie'\n@import '../../../assets/sass/mixins/retina'\n@import '../../../assets/sass/mixins/fonts'\n@import '../../../assets/sass/mixins/triangle'\n@import '../../../assets/sass/mixins/absolute-center'\n@import '../../../assets/sass/mixins/horizontal-center'\n@import '../../../assets/sass/mixins/absolute-center'\n@import '../../../assets/sass/mixins/vertical-center'\n@import '../../../assets/sass/mixins/flex-center'\n@import '../../../assets/sass/mixins/visually-hidden'\n@import '../../../assets/sass/mixins/bem'\n@import '../../../assets/sass/mixins/transition'\n@import '../../../assets/sass/mixins/text-overflow'\n@import '../../../assets/sass/mixins/line-clamp'\n@import '../../../assets/sass/mixins/scrollbar'\n\n+b('Details')\n  +media($screen-lg)\n    display: flex\n\n  +e('Column')\n    +m('left')\n      display: none\n\n      +media($screen-lg)\n        width: 342px\n        height: 513px\n        margin-right: 30px\n        flex-shrink: 0\n        display: block\n\n    +m('right')\n      +media($screen-lg)\n        max-width: 1000px\n\n  +e('Title')\n    font-size: 18px\n    line-height: 28px\n    font-weight: 400\n    margin: 0 0 10px\n\n    +media($screen-lg)\n      font-size: 24px\n      line-height: 38px\n\n  +e('Overview')\n    font-size: 15px\n    line-height: 24px\n    margin-bottom: 30px\n\n    +media($screen-lg)\n      font-size: 16px\n\n  +e('Table')\n    font-size: 15px\n    line-height: 24px\n\n    +media($screen-lg)\n      font-size: 16px\n\n  +e('TableData')\n    text-transform: capitalize\n    vertical-align: top\n\n    &:first-of-type\n      padding-right: 15px\n      box-sizing: border-box\n\n      +media($screen-lg)\n        white-space: nowrap\n        padding-right: 50px\n","=b($name)\n  .#{$name}\n    @content\n\n=e($name)\n  &-#{$name}\n    @content\n\n=m($name)\n  &_#{$name}\n    @content\n"],sourceRoot:""}]);const r=l}}]);
//# sourceMappingURL=545.13f54817.chunk.js.map