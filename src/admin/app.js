// const config = {
//   locales: [
//     // 'ar',
//     // 'fr',
//     // 'cs',
//     // 'de',
//     // 'dk',
//     // 'es',
//     // 'he',
//     // 'id',
//     // 'it',
//     // 'ja',
//     // 'ko',
//     // 'ms',
//     // 'nl',
//     // 'no',
//     // 'pl',
//     // 'pt-BR',
//     // 'pt',
//     // 'ru',
//     // 'sk',
//     // 'sv',
//     // 'th',
//     // 'tr',
//     // 'uk',
//     // 'vi',
//     // 'zh-Hans',
//     // 'zh',
//   ],
// };

// const bootstrap = (app) => {
//   console.log(app);
// };

// export default {
//   config,
//   bootstrap,
// };


import HelloWorldButton from "./extensions/components/HelloWorldButton";

export default {
  bootstrap(app) {
    app.injectContentManagerComponent("editView", "informations", {
      name: "HelloWorldButton",
      Component: HelloWorldButton,
    });
  },
};