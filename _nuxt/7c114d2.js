(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{234:function(t,e,r){"use strict";r.r(e);var n=r(6),l=(r(50),{name:"Profile",data:function(){return{finished:!1,lanyard:{},socket:null,scTimer:0,scY:0}},beforeDestroy:function(){var t;null===(t=this.socket)||void 0===t||t.close()},computed:{convertDiscordStatus:function(){switch(this.lanyard.discord_status){case"online":return"Çevrim içi";case"idle":return"Boşta";case"dnd":return"Rahatsız Etmeyin";default:return"Çevrim dışı"}},getDiscordStatus:function(){switch(this.lanyard.discord_status){case"online":return"bg-green-500";case"idle":return"bg-yellow-500";case"dnd":return"bg-red-500";default:return"bg-gray-500 dark:bg-gray-200"}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$lanyard({userId:"298888568279924746",socket:!0});case 2:t.socket=e.sent,null===(r=t.socket)||void 0===r||r.addEventListener("message",(function(e){var data=e.data,r=JSON.parse(data),n=r.t,l=r.d;"INIT_STATE"!==n&&"PRESENCE_UPDATE"!==n||(t.lanyard=l||{}),t.finished=!0}));case 4:case"end":return e.stop()}}),e)})))()}}),d=r(38),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.finished&&Object.keys(t.lanyard).length>1?r("div",{staticClass:"flex md:flex-row space-x-0 md:space-x-5 flex-col md:items-start md:justify-start justify-center items-center md:flex-row mt-4"},[r("img",{staticClass:"rounded-md mb-3 md:mt-0 w-40 h-40",attrs:{draggable:"false",src:"https://cdn.discordapp.com/avatars/"+t.lanyard.discord_user.id+"/"+t.lanyard.discord_user.avatar+".webp?size=4096"}}),t._v(" "),r("div",{staticClass:"flex md:text-left text-center md:items-start items-center flex-col"},[r("h1",{staticClass:"font-semibold text-3xl"},[t._v(t._s(t.lanyard.discord_user.username)+"#"+t._s(t.lanyard.discord_user.discriminator))]),t._v(" "),r("div",{staticClass:"flex mt-1 font-light text-center items-center"},[r("p",{class:"h-4 w-4 rounded-full mr-1 "+t.getDiscordStatus}),t._v(" "+t._s(t.convertDiscordStatus))]),t._v(" "),t.lanyard.spotify?r("h1",{staticClass:"mt-1 font-light flex flex-row items-center"},[r("img",{staticClass:"w-4 h-4 mr-1",attrs:{src:"/assets/brands/spotify.svg",alt:"spotify"}}),t._v(" Spotify Dinliyor")]):t._e(),t._v(" "),t.lanyard.spotify?r("div",{staticClass:"mt-2 flex md:flex-row flex-col md:items-start items-center"},[r("img",{staticClass:"spotify md:mb-0 mb-1 rounded-md",attrs:{src:""+t.lanyard.spotify.album_art_url,alt:"album",draggable:"false"}}),t._v(" "),r("div",{staticClass:"flex flex-col"},[r("p",{staticClass:"ml-3 whitespace-nowrap overflow-hidden w-52 overflow-ellipsis"},[t._v(t._s(t.lanyard.spotify.song))]),t._v(" "),r("p",{staticClass:"ml-3 whitespace-nowrap overflow-hidden w-52 overflow-ellipsis font-light text-sm"},[t._v(t._s(t.lanyard.spotify.artist))])])]):t._e(),t._v(" "),t.lanyard.spotify?t._e():r("h1",{staticClass:"mt-1 font-light flex flex-row items-center"},[r("img",{staticClass:"w-4 h-4 mr-1",attrs:{src:"/assets/brands/spotify.svg",alt:"spotify"}}),t._v(" Şu anda şarkı dinlemiyor")])])]):r("div",{staticClass:"flex md:flex-row space-x-0 md:space-x-5 flex-col md:items-start md:justify-start justify-center items-center md:flex-row mt-4"},[r("div",{staticClass:"rounded-md mb-3 md:mt-0 w-40 h-40 bg-second"}),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex text-left flex-col"},[r("div",{staticClass:"h-6 w-40 bg-second rounded"}),t._v(" "),r("div",{staticClass:"h-5 mt-2 w-32 bg-second rounded"})])}],!1,null,null,null);e.default=component.exports}}]);