'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "56f300f93b270cbbf05a8c48410cfd12",
"assets/assets/book.png": "641ebb5a08c1e85b326df34e0356930d",
"assets/assets/login.png": "8dbf67c039a0c57b9edca28c3c9bea30",
"assets/FontManifest.json": "7b3b848aed509ecd684cc2f89aaf4e31",
"assets/fonts/CustomIcons.ttf": "0d6b2e1bfeae607043425e47668a6230",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "03a86e77ba13a6e7dd04c792013a119d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"cache.appcache": "b4ddfd4dc74655b355308efca268070a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6e6fa9fe829b8283c814264a7ea3dacc",
"/": "6e6fa9fe829b8283c814264a7ea3dacc",
"main.dart.js": "69d1d67c1dd89822c9a641012ec4a58c",
"manifest.json": "fac8aed9993ac9945be5e9382367cbbf",
"pdfjs/build/pdf.js": "39775155706ef3eda188886538f006a5",
"pdfjs/build/pdf.js.map": "e5558c9733e836779cb8eb4f3cdd121d",
"pdfjs/build/pdf.sandbox.js": "e4b9032181e1984b8f83310e12a9524b",
"pdfjs/build/pdf.sandbox.js.map": "e77a2e8737fc153db8eb2e7ada7c42cf",
"pdfjs/build/pdf.worker.js": "f0431abd1bf5a400ced4081aaaaf1b2d",
"pdfjs/build/pdf.worker.js.map": "515108c9db857aafe8e5cef9b4e854d3",
"pdfjs/LICENSE": "2ee41112a44fe7014dce33e26468ba93",
"pdfjs/web/cmaps/78-EUC-H.bcmap": "6d23b789047f6fa8f6923e7ae411d642",
"pdfjs/web/cmaps/78-EUC-V.bcmap": "5d7d0e488fb52b2a4f8d240b0d572e89",
"pdfjs/web/cmaps/78-H.bcmap": "1185e3229597bc4c1fb1ae6f0c7b2e13",
"pdfjs/web/cmaps/78-RKSJ-H.bcmap": "a3820f0a3029a225c3006b28153a518d",
"pdfjs/web/cmaps/78-RKSJ-V.bcmap": "5c65c928ce1d77770cff741c2f33bc11",
"pdfjs/web/cmaps/78-V.bcmap": "0d300f0f9e60396df0a524511c245944",
"pdfjs/web/cmaps/78ms-RKSJ-H.bcmap": "fe0b824fd3c0c4d56bb71fc83f5e3b00",
"pdfjs/web/cmaps/78ms-RKSJ-V.bcmap": "4a0fc4d9e4b243bbc1aaa24f7dc35f90",
"pdfjs/web/cmaps/83pv-RKSJ-H.bcmap": "94b942a274043dac7fb8c9325a944be9",
"pdfjs/web/cmaps/90ms-RKSJ-H.bcmap": "f004fca8008bd7c441dd3c58a390f266",
"pdfjs/web/cmaps/90ms-RKSJ-V.bcmap": "04d52a362bd8c27fec29dcec9728ef77",
"pdfjs/web/cmaps/90msp-RKSJ-H.bcmap": "155fc53b29911db7197dd92832157fbe",
"pdfjs/web/cmaps/90msp-RKSJ-V.bcmap": "22e09450e898241b030ce5b4d542659b",
"pdfjs/web/cmaps/90pv-RKSJ-H.bcmap": "87fe105691f63e1ca8fa6269a99e20c8",
"pdfjs/web/cmaps/90pv-RKSJ-V.bcmap": "a6bea88d2434f1daeffe7965347ad534",
"pdfjs/web/cmaps/Add-H.bcmap": "f6efdbb61d3d966df09cc6c298c29868",
"pdfjs/web/cmaps/Add-RKSJ-H.bcmap": "efcdf16f5fd9e20c90f9e393fbea3e1d",
"pdfjs/web/cmaps/Add-RKSJ-V.bcmap": "0caedf6b6009d36caa4a3f354856bbc8",
"pdfjs/web/cmaps/Add-V.bcmap": "f70574fdd480d364a32532c5af31a397",
"pdfjs/web/cmaps/Adobe-CNS1-0.bcmap": "175673c4e9ae968dcea3eaca4b7b7d1a",
"pdfjs/web/cmaps/Adobe-CNS1-1.bcmap": "1706915b9e351f7bf784e45ff0bc5d35",
"pdfjs/web/cmaps/Adobe-CNS1-2.bcmap": "c32fa54e54bd3a328ce0cbed30a6d09e",
"pdfjs/web/cmaps/Adobe-CNS1-3.bcmap": "68996101860e16ad38924a1c5a7b54d8",
"pdfjs/web/cmaps/Adobe-CNS1-4.bcmap": "52f19088dd3f2dc15715d4204fd68b7c",
"pdfjs/web/cmaps/Adobe-CNS1-5.bcmap": "6f7e75c26fd017c6070ce087170c79df",
"pdfjs/web/cmaps/Adobe-CNS1-6.bcmap": "50690e841492eb306a3554ec93d22727",
"pdfjs/web/cmaps/Adobe-CNS1-UCS2.bcmap": "6a32d36d37017a2e157b06dcc57b9eef",
"pdfjs/web/cmaps/Adobe-GB1-0.bcmap": "f2997b05ae8aafd00114f98b2718f712",
"pdfjs/web/cmaps/Adobe-GB1-1.bcmap": "8cb590d42c29a684b45cd2323d804f2e",
"pdfjs/web/cmaps/Adobe-GB1-2.bcmap": "4b816ff568b22bcd31417ae176c2af06",
"pdfjs/web/cmaps/Adobe-GB1-3.bcmap": "be5c8267c6fe28d9f4ae11221a3c8c3c",
"pdfjs/web/cmaps/Adobe-GB1-4.bcmap": "e21e5a23751a1bcf9a05868190506a56",
"pdfjs/web/cmaps/Adobe-GB1-5.bcmap": "4fe4c440c3f09425f2b114e42ecb866e",
"pdfjs/web/cmaps/Adobe-GB1-UCS2.bcmap": "af9f90c0950eb1a4523bcca7a679d19b",
"pdfjs/web/cmaps/Adobe-Japan1-0.bcmap": "a066edf925d652e4566741be7aaf2e77",
"pdfjs/web/cmaps/Adobe-Japan1-1.bcmap": "2296cdd2b9e96b0a95d3cb9a0f98747c",
"pdfjs/web/cmaps/Adobe-Japan1-2.bcmap": "a935e26eb05160ba7b3c45255b0156ee",
"pdfjs/web/cmaps/Adobe-Japan1-3.bcmap": "a97917c0e0f219e1cac2e471f69ba409",
"pdfjs/web/cmaps/Adobe-Japan1-4.bcmap": "1d1305c42d75b212dad20c6fb80d0bf1",
"pdfjs/web/cmaps/Adobe-Japan1-5.bcmap": "123581eb09766fcd3d1626b5e2fa2f0c",
"pdfjs/web/cmaps/Adobe-Japan1-6.bcmap": "1c541669cdee3ef8c2e8f29f99f4a9f8",
"pdfjs/web/cmaps/Adobe-Japan1-UCS2.bcmap": "35f4e7f02523120aa37c79790a1b48bb",
"pdfjs/web/cmaps/Adobe-Korea1-0.bcmap": "8bd552079ccb0724d40e8fb3a0724006",
"pdfjs/web/cmaps/Adobe-Korea1-1.bcmap": "84eb56b5caf745cabd9229f37db72db9",
"pdfjs/web/cmaps/Adobe-Korea1-2.bcmap": "1752dd13143dafcbd7674bdc35acdaeb",
"pdfjs/web/cmaps/Adobe-Korea1-UCS2.bcmap": "2b666a3cd23be13c9d2b77189345150a",
"pdfjs/web/cmaps/B5-H.bcmap": "683aa95fc49aa53b2982c076e1d57463",
"pdfjs/web/cmaps/B5-V.bcmap": "dd87b4ad5c26fad4efe5655dcd150c3c",
"pdfjs/web/cmaps/B5pc-H.bcmap": "ad22300d6dba5b2343e2c05d38725b5d",
"pdfjs/web/cmaps/B5pc-V.bcmap": "f082e890137d28d3ff1db7dd53d857df",
"pdfjs/web/cmaps/CNS-EUC-H.bcmap": "25edb8902ccdf5cca8393826ba76537c",
"pdfjs/web/cmaps/CNS-EUC-V.bcmap": "dfc3bd3ebe7c403150cabf10d66d6231",
"pdfjs/web/cmaps/CNS1-H.bcmap": "e2abbde56299f848291e059d041312e8",
"pdfjs/web/cmaps/CNS1-V.bcmap": "2793eed7c84487bd846f38f26843722c",
"pdfjs/web/cmaps/CNS2-H.bcmap": "6ceb8bae07c42f08b9bada4cc611caea",
"pdfjs/web/cmaps/CNS2-V.bcmap": "1a116f3db2e9f2d5871246c0a72d79d2",
"pdfjs/web/cmaps/ETen-B5-H.bcmap": "64f3db1a350af8c595f591b39ba96e21",
"pdfjs/web/cmaps/ETen-B5-V.bcmap": "20fc6bca6d21e5cad9fb2e650f9ae034",
"pdfjs/web/cmaps/ETenms-B5-H.bcmap": "c00836e71e8c4e521632634f03990b6c",
"pdfjs/web/cmaps/ETenms-B5-V.bcmap": "fd9fcb08808af325bb9d7c65b8f5332b",
"pdfjs/web/cmaps/ETHK-B5-H.bcmap": "6992841a10b5b04cd62f1ec7a2fd8bb8",
"pdfjs/web/cmaps/ETHK-B5-V.bcmap": "7a10542e0ff8112686846d6c50fefc7f",
"pdfjs/web/cmaps/EUC-H.bcmap": "a148cb650e78045565f5a93f9fdf4352",
"pdfjs/web/cmaps/EUC-V.bcmap": "085cdc069606e1879e9a53db7c695581",
"pdfjs/web/cmaps/Ext-H.bcmap": "f78457b4f98a6be2820e6bbad710474d",
"pdfjs/web/cmaps/Ext-RKSJ-H.bcmap": "bb6a6dfab041b3820249bb72bf23cba8",
"pdfjs/web/cmaps/Ext-RKSJ-V.bcmap": "4b3106c186de7ccf3b56999b6b3bf32c",
"pdfjs/web/cmaps/Ext-V.bcmap": "c6bf9c0e52edc7f7c9c28b4ba34bc311",
"pdfjs/web/cmaps/GB-EUC-H.bcmap": "1982d7870002a219da5cb6a80e418445",
"pdfjs/web/cmaps/GB-EUC-V.bcmap": "4489f113f6405d419c7590a59520ed2f",
"pdfjs/web/cmaps/GB-H.bcmap": "69530bd74ed5eb6e117f5ebbbb869664",
"pdfjs/web/cmaps/GB-V.bcmap": "576c153301c977f903a01e28927f721b",
"pdfjs/web/cmaps/GBK-EUC-H.bcmap": "546ff998ffca9e8f5171705548b73947",
"pdfjs/web/cmaps/GBK-EUC-V.bcmap": "e801ec722f7eabf2a3f7e3fd00d92c36",
"pdfjs/web/cmaps/GBK2K-H.bcmap": "ace168da92203829634b37aa60636b46",
"pdfjs/web/cmaps/GBK2K-V.bcmap": "3e25abf6ef781f84dc1fbe21776ca2fe",
"pdfjs/web/cmaps/GBKp-EUC-H.bcmap": "ae828bc249c7fc18c84c2f5c58eceb58",
"pdfjs/web/cmaps/GBKp-EUC-V.bcmap": "986a674beebba7ffa85c0a351f571e19",
"pdfjs/web/cmaps/GBpc-EUC-H.bcmap": "f5693d775aec9a96a26b2970a61d2e8e",
"pdfjs/web/cmaps/GBpc-EUC-V.bcmap": "b5cde365a48639163ecd3086ee0dab23",
"pdfjs/web/cmaps/GBT-EUC-H.bcmap": "a109d1ca6837ce5f5565c28d3b10db14",
"pdfjs/web/cmaps/GBT-EUC-V.bcmap": "f5ff779f0b6e6fdef747f22e8ddff800",
"pdfjs/web/cmaps/GBT-H.bcmap": "4e90c37287e2b90c921e4a19c57d6608",
"pdfjs/web/cmaps/GBT-V.bcmap": "6b7422f3be63297a537edb3f16e72b98",
"pdfjs/web/cmaps/GBTpc-EUC-H.bcmap": "25eeeca5113ba0b3f5e6b3801c94e7d5",
"pdfjs/web/cmaps/GBTpc-EUC-V.bcmap": "e8eba8d9c036830493e148720377d119",
"pdfjs/web/cmaps/H.bcmap": "627aeed8bfccb1ed45805efc48dd4ce0",
"pdfjs/web/cmaps/Hankaku.bcmap": "417dcb6fd94965007413db517d3fd067",
"pdfjs/web/cmaps/Hiragana.bcmap": "649cb471527a4da81e6d07664c035477",
"pdfjs/web/cmaps/HKdla-B5-H.bcmap": "c31304dbfa1fe8990e5ea68676a0df95",
"pdfjs/web/cmaps/HKdla-B5-V.bcmap": "09e2c1b09885843ac57479d72402145a",
"pdfjs/web/cmaps/HKdlb-B5-H.bcmap": "3e1ec904aae270a8be1b6fd4c96326eb",
"pdfjs/web/cmaps/HKdlb-B5-V.bcmap": "92dc4bf1a4567215adab3d797654ad46",
"pdfjs/web/cmaps/HKgccs-B5-H.bcmap": "9261c86d4041514d3a635b7d594d6abc",
"pdfjs/web/cmaps/HKgccs-B5-V.bcmap": "f132983d5f5420286682b172658a2ec1",
"pdfjs/web/cmaps/HKm314-B5-H.bcmap": "6cef006196f7b8f5fc8900f3b5401381",
"pdfjs/web/cmaps/HKm314-B5-V.bcmap": "4286ece506e56645b39ba68db5a07083",
"pdfjs/web/cmaps/HKm471-B5-H.bcmap": "1aae686eacbdb6060b539fc0c707d8cf",
"pdfjs/web/cmaps/HKm471-B5-V.bcmap": "cc4d2cb9929ed45e16bf61c0abc7479f",
"pdfjs/web/cmaps/HKscs-B5-H.bcmap": "1bd13e99b26e216ecb42b311df49e6af",
"pdfjs/web/cmaps/HKscs-B5-V.bcmap": "2806aabef1c7dc9b36ef8182ceaab582",
"pdfjs/web/cmaps/Katakana.bcmap": "28405011de4a74f5e78e02bccb85eaf6",
"pdfjs/web/cmaps/KSC-EUC-H.bcmap": "28a11b2394ffab355c68bf51629fa95c",
"pdfjs/web/cmaps/KSC-EUC-V.bcmap": "61f1b5baf1ce16facee14cf148554e10",
"pdfjs/web/cmaps/KSC-H.bcmap": "858801396e7064112f546954633f1a61",
"pdfjs/web/cmaps/KSC-Johab-H.bcmap": "45d61007e3761bb08e3479971b7cea94",
"pdfjs/web/cmaps/KSC-Johab-V.bcmap": "7c054594c09a5ac87361e486afe689bf",
"pdfjs/web/cmaps/KSC-V.bcmap": "b4ce24d7d1f815927c5559e983b86ffd",
"pdfjs/web/cmaps/KSCms-UHC-H.bcmap": "573d3648c7706e998b055e6af116cf72",
"pdfjs/web/cmaps/KSCms-UHC-HW-H.bcmap": "d2890889e32e6582435b33aae2ff4e2a",
"pdfjs/web/cmaps/KSCms-UHC-HW-V.bcmap": "32424d5d84512218ea0812fe6db587c6",
"pdfjs/web/cmaps/KSCms-UHC-V.bcmap": "8a7816d2df1da6d26e916b7c90cdc59c",
"pdfjs/web/cmaps/KSCpc-EUC-H.bcmap": "6beae596a780f2e4a4de74b5ed9999e1",
"pdfjs/web/cmaps/KSCpc-EUC-V.bcmap": "65e5a7c51efeb1a7d286edd3bc9e6e26",
"pdfjs/web/cmaps/LICENSE": "18b1bb59e2bec1a9142d820c8f2b3a69",
"pdfjs/web/cmaps/NWP-H.bcmap": "b7cce8e1696a0f3f18f5fea7201ffd87",
"pdfjs/web/cmaps/NWP-V.bcmap": "562550c483c23aeefcdb3e8e1e5eadb8",
"pdfjs/web/cmaps/RKSJ-H.bcmap": "8bcf3f8777b3a7e8dc52fa3a921cea13",
"pdfjs/web/cmaps/RKSJ-V.bcmap": "4bda602f6d2cdd94ba08c2f9c388e582",
"pdfjs/web/cmaps/Roman.bcmap": "ccd95559d60a9d72d3a50039e83f6b54",
"pdfjs/web/cmaps/UniCNS-UCS2-H.bcmap": "94e0d8eda9e3cfcd6447ba6be938286a",
"pdfjs/web/cmaps/UniCNS-UCS2-V.bcmap": "2e01733017a16eddd9ab837f8ca275e4",
"pdfjs/web/cmaps/UniCNS-UTF16-H.bcmap": "8243da01521d95e9cbbf0a9581cb9b8a",
"pdfjs/web/cmaps/UniCNS-UTF16-V.bcmap": "273d10d22bfd890d0c7a4a1c0fac3d0c",
"pdfjs/web/cmaps/UniCNS-UTF32-H.bcmap": "ffd5764a6de25e35c218633a153aee60",
"pdfjs/web/cmaps/UniCNS-UTF32-V.bcmap": "2db93aee01ee80ec4f91dce93f48501a",
"pdfjs/web/cmaps/UniCNS-UTF8-H.bcmap": "edcae260fcd8ae26bd68c787c3a9fb19",
"pdfjs/web/cmaps/UniCNS-UTF8-V.bcmap": "380c81f19a765fa3577e9b9c030c90a0",
"pdfjs/web/cmaps/UniGB-UCS2-H.bcmap": "f19fb20d2b1cb681ef320816e6064b28",
"pdfjs/web/cmaps/UniGB-UCS2-V.bcmap": "e612b97dc2bf7592a35941a01f2c0fb2",
"pdfjs/web/cmaps/UniGB-UTF16-H.bcmap": "197ead1238cf310794bf8c440c6c951e",
"pdfjs/web/cmaps/UniGB-UTF16-V.bcmap": "816ee62d950547ef64157ffc9c8eb7a1",
"pdfjs/web/cmaps/UniGB-UTF32-H.bcmap": "7e80b8251c61612c682fc1722caa8fed",
"pdfjs/web/cmaps/UniGB-UTF32-V.bcmap": "d1716f8249d50ce2c0483c56e8905e85",
"pdfjs/web/cmaps/UniGB-UTF8-H.bcmap": "efe5b01ff58a88047f2927a06c44d8af",
"pdfjs/web/cmaps/UniGB-UTF8-V.bcmap": "c488f7851343b8c193fa7d60ee961272",
"pdfjs/web/cmaps/UniJIS-UCS2-H.bcmap": "d3c57acf7d97190d2f44607c35cf8985",
"pdfjs/web/cmaps/UniJIS-UCS2-HW-H.bcmap": "88d9668d4e0fe2cca6a05126eda0ff33",
"pdfjs/web/cmaps/UniJIS-UCS2-HW-V.bcmap": "86ac1bd54fadca24ad7b1e819e3be5c9",
"pdfjs/web/cmaps/UniJIS-UCS2-V.bcmap": "54bac7377fcb902bec305b2589a742b9",
"pdfjs/web/cmaps/UniJIS-UTF16-H.bcmap": "84f5a941b57142fe3f1941442b0e5be6",
"pdfjs/web/cmaps/UniJIS-UTF16-V.bcmap": "db6a81ba21b84fa2a59faac42b323242",
"pdfjs/web/cmaps/UniJIS-UTF32-H.bcmap": "09e701c16b91705c4a74e54f9b5548e4",
"pdfjs/web/cmaps/UniJIS-UTF32-V.bcmap": "b5d631a40f709e3747220de2641b4e39",
"pdfjs/web/cmaps/UniJIS-UTF8-H.bcmap": "48bfd003325873efab276db8a1ae34b9",
"pdfjs/web/cmaps/UniJIS-UTF8-V.bcmap": "029c1bbcf404512f1a7fe5d48833d41d",
"pdfjs/web/cmaps/UniJIS2004-UTF16-H.bcmap": "1f037331a2bf13ecac7b25e749d77b61",
"pdfjs/web/cmaps/UniJIS2004-UTF16-V.bcmap": "cd2354135bdca01b516f0ab5d23198dd",
"pdfjs/web/cmaps/UniJIS2004-UTF32-H.bcmap": "d8fe0443a0412540621c8717030cea0a",
"pdfjs/web/cmaps/UniJIS2004-UTF32-V.bcmap": "bae31bac63e6b5d498116be513776f4b",
"pdfjs/web/cmaps/UniJIS2004-UTF8-H.bcmap": "ce0f823592f53616c7ae6544ceec099b",
"pdfjs/web/cmaps/UniJIS2004-UTF8-V.bcmap": "8920d15338280d50b89404dc6209e3c4",
"pdfjs/web/cmaps/UniJISPro-UCS2-HW-V.bcmap": "982413ac0838783f38bdffc16dae96e5",
"pdfjs/web/cmaps/UniJISPro-UCS2-V.bcmap": "b3a9a06f3284bc0b5b653998c57dd2c7",
"pdfjs/web/cmaps/UniJISPro-UTF8-V.bcmap": "870c2e8dbbce67547c940cc04d9aea76",
"pdfjs/web/cmaps/UniJISX0213-UTF32-H.bcmap": "1af0093c3e866566e599f4122ffd3738",
"pdfjs/web/cmaps/UniJISX0213-UTF32-V.bcmap": "c7b74503909b3143712fa48df5bac8dd",
"pdfjs/web/cmaps/UniJISX02132004-UTF32-H.bcmap": "78f91a094e3ba73570a907f26e5dfb6b",
"pdfjs/web/cmaps/UniJISX02132004-UTF32-V.bcmap": "34a245178a071696fa87285a14a6a572",
"pdfjs/web/cmaps/UniKS-UCS2-H.bcmap": "1bccd691db023fbebc2300c5053075f2",
"pdfjs/web/cmaps/UniKS-UCS2-V.bcmap": "b5f48b86ad0a973ab4363d76dd02c82f",
"pdfjs/web/cmaps/UniKS-UTF16-H.bcmap": "f3f4d4d463821193c6989f2b65c20863",
"pdfjs/web/cmaps/UniKS-UTF16-V.bcmap": "0d45980df8769bd3b1b14687206d0c63",
"pdfjs/web/cmaps/UniKS-UTF32-H.bcmap": "0c33937aceaa1b85e4aad18b3906b906",
"pdfjs/web/cmaps/UniKS-UTF32-V.bcmap": "534254835ba655f6e61b36796c73f1a8",
"pdfjs/web/cmaps/UniKS-UTF8-H.bcmap": "23efe636bda29ae5c4fcbc710b970e0a",
"pdfjs/web/cmaps/UniKS-UTF8-V.bcmap": "f7b676cfe90f97ea650baf780b4886f9",
"pdfjs/web/cmaps/V.bcmap": "fe6a499319094136b2aa5b7edc627117",
"pdfjs/web/cmaps/WP-Symbol.bcmap": "b24c3ddd810f5a50a671731381c3faf5",
"pdfjs/web/compressed.tracemonkey-pldi-09.pdf": "9a192d8b1a7dc652a19835f6f08098bd",
"pdfjs/web/debugger.css": "2f4e5f817b75fa98bf936c4e8fa4cd7a",
"pdfjs/web/debugger.js": "454ea153ca826ac8aefccb4b3efcfdbd",
"pdfjs/web/images/annotation-check.svg": "1aac80711a19e2e435ef13aba855901f",
"pdfjs/web/images/annotation-comment.svg": "4f3d3d9b61d113ba0d284481d2454af4",
"pdfjs/web/images/annotation-help.svg": "6ec1ca7b8aa80a3e10325e74d7998894",
"pdfjs/web/images/annotation-insert.svg": "790992abfc5034ed777d4ca8b4865a96",
"pdfjs/web/images/annotation-key.svg": "40015bde172203a4ffa880a238d6d779",
"pdfjs/web/images/annotation-newparagraph.svg": "bb7062f13b8ce19185fc37ff7dc67566",
"pdfjs/web/images/annotation-noicon.svg": "6508f26ea254277f5c0df4ea5ab9f24d",
"pdfjs/web/images/annotation-note.svg": "832e3217eb765543d201f3b40005956d",
"pdfjs/web/images/annotation-paperclip.svg": "95261db8f4694ced4b753a5a14b7627c",
"pdfjs/web/images/annotation-paragraph.svg": "da51c08160d09ff8f5e8e09dc9e042eb",
"pdfjs/web/images/annotation-pushpin.svg": "cd64866e884b245796cb15d41b8c3c86",
"pdfjs/web/images/cursor-editorFreeText.svg": "3626649fe7b80fa3a71aad576edec17b",
"pdfjs/web/images/cursor-editorInk.svg": "6cf7a147a22611a98dbc409b9d44b56a",
"pdfjs/web/images/findbarButton-next.svg": "e2824495a76d61b21028ecfa27acaa43",
"pdfjs/web/images/findbarButton-previous.svg": "2c51564fbaeef89ee1d9e2ec7d3b8a24",
"pdfjs/web/images/loading-dark.svg": "2a0e614e86e1eac2096285f5d25ba096",
"pdfjs/web/images/loading-icon.gif": "faa74e8c61fc64d5edb11613c7eead2c",
"pdfjs/web/images/loading.svg": "28e82fa827563f85d2986895c1162311",
"pdfjs/web/images/secondaryToolbarButton-documentProperties.svg": "3a16ee3729687f1d1302712e664cee91",
"pdfjs/web/images/secondaryToolbarButton-firstPage.svg": "91a9b8bc9176f001354505d89d73a8ce",
"pdfjs/web/images/secondaryToolbarButton-handTool.svg": "0e155713a95a017cc5cc30a27040f8dc",
"pdfjs/web/images/secondaryToolbarButton-lastPage.svg": "c27d30a2455403e97bb8b04284cfd703",
"pdfjs/web/images/secondaryToolbarButton-rotateCcw.svg": "cf46d5e2ca6535f4fe837fd828b70d2f",
"pdfjs/web/images/secondaryToolbarButton-rotateCw.svg": "3fbd44c0002c0a429c9f274a1119f5ae",
"pdfjs/web/images/secondaryToolbarButton-scrollHorizontal.svg": "065b34ce2cca659d32af24945cdd6060",
"pdfjs/web/images/secondaryToolbarButton-scrollPage.svg": "f001ec02d59dd559f9ac188b789e9c93",
"pdfjs/web/images/secondaryToolbarButton-scrollVertical.svg": "b5a84c07efc4acf13bc9fd6789257e5e",
"pdfjs/web/images/secondaryToolbarButton-scrollWrapped.svg": "65eab208698a7e36ed4a36267ddf32f6",
"pdfjs/web/images/secondaryToolbarButton-selectTool.svg": "0995cdd62abae594b8953a5846f46c1f",
"pdfjs/web/images/secondaryToolbarButton-spreadEven.svg": "cb937aafab1ced8cf88d9a9b5eb20903",
"pdfjs/web/images/secondaryToolbarButton-spreadNone.svg": "b11634325efd950bb7fa91be259ba7f7",
"pdfjs/web/images/secondaryToolbarButton-spreadOdd.svg": "27a437431079dfec6eab0910088401fb",
"pdfjs/web/images/toolbarButton-bookmark.svg": "f92ef9c0fe7cc0f63da7c346326a8bea",
"pdfjs/web/images/toolbarButton-currentOutlineItem.svg": "7f4b752b494a196d26810587a2183d93",
"pdfjs/web/images/toolbarButton-download.svg": "1c49e5945ebbb8f01334868d4cf3eb41",
"pdfjs/web/images/toolbarButton-editorFreeText.svg": "c2cb766a28b28eb331836be1ecf9b0e5",
"pdfjs/web/images/toolbarButton-editorInk.svg": "8f1b37788128093e13e5c8ebf4ffa176",
"pdfjs/web/images/toolbarButton-menuArrow.svg": "f1e2c311332ee5bec43bebe6a9e6fadc",
"pdfjs/web/images/toolbarButton-openFile.svg": "b028067475ee9cb463cb332b80a4f118",
"pdfjs/web/images/toolbarButton-pageDown.svg": "f069204380261a6209e0a8d09296ecac",
"pdfjs/web/images/toolbarButton-pageUp.svg": "a7bde62b304e817fc82b3eb447a4e61f",
"pdfjs/web/images/toolbarButton-presentationMode.svg": "e5e5e2bd092da9563e9fe1683ca96814",
"pdfjs/web/images/toolbarButton-print.svg": "f72bda736f4134a6fbbabb07b2df33de",
"pdfjs/web/images/toolbarButton-search.svg": "460a4f30268e7ca89caf686bc6d158d8",
"pdfjs/web/images/toolbarButton-secondaryToolbarToggle.svg": "15c198a9e82f0acde67bcf984a2a392e",
"pdfjs/web/images/toolbarButton-sidebarToggle.svg": "6e9a87e8892bbc18d6c8c6ec92f928be",
"pdfjs/web/images/toolbarButton-viewAttachments.svg": "2624927ca6a9b27a89ea3771016667ae",
"pdfjs/web/images/toolbarButton-viewLayers.svg": "e05350ecb3f3a562a95c949d80618e7b",
"pdfjs/web/images/toolbarButton-viewOutline.svg": "3c685c673deb2a6d84fb7c0029b03e63",
"pdfjs/web/images/toolbarButton-viewThumbnail.svg": "b74203eb9c9b702676441ae7e844a0b5",
"pdfjs/web/images/toolbarButton-zoomIn.svg": "7393db490c10e1225af2bea630dff600",
"pdfjs/web/images/toolbarButton-zoomOut.svg": "950d42d1105146a1868ba45ac2ed54f5",
"pdfjs/web/images/treeitem-collapsed.svg": "57e07b703e74290b985879a5606283e5",
"pdfjs/web/images/treeitem-expanded.svg": "af9e269b3a6939136b579962c0fdb3ef",
"pdfjs/web/locale/ach/viewer.properties": "6abd5f298201afe3b32a4fabe88da658",
"pdfjs/web/locale/af/viewer.properties": "eac0dac20391085e6c4f7acaa5b15d90",
"pdfjs/web/locale/an/viewer.properties": "ff6720cf0abaf6d81049d4fef3969f0c",
"pdfjs/web/locale/ar/viewer.properties": "a250c8a32840ffe385c778992498062b",
"pdfjs/web/locale/ast/viewer.properties": "fd48116393933f1b686ee640df401616",
"pdfjs/web/locale/az/viewer.properties": "68e7a6e98e33b9a06153c2f6dac2b18f",
"pdfjs/web/locale/be/viewer.properties": "160728bedfa0d6a70657d56d1a836f6c",
"pdfjs/web/locale/bg/viewer.properties": "e9fb16a8dedc45e2a586ff671b708723",
"pdfjs/web/locale/bn/viewer.properties": "e122992bf0c5e10ab158f76db826fc93",
"pdfjs/web/locale/bo/viewer.properties": "2b3994b4d7cf54ac903235095f2e71c3",
"pdfjs/web/locale/br/viewer.properties": "83a59b0cf57df508855aafdb9b587a5c",
"pdfjs/web/locale/brx/viewer.properties": "42ce8d5435763bc14386890cbe6d3512",
"pdfjs/web/locale/bs/viewer.properties": "7af0e91f71043955481cbce2458686e1",
"pdfjs/web/locale/ca/viewer.properties": "09f2e47e9291368745250334acacc4f6",
"pdfjs/web/locale/cak/viewer.properties": "d9f45f907cb616d01c2296b895eb4c80",
"pdfjs/web/locale/ckb/viewer.properties": "6ffd3aca2029769ffd4d870c4ebc3330",
"pdfjs/web/locale/cs/viewer.properties": "0ddbae7aebdd474fb4cfb1c1484a221c",
"pdfjs/web/locale/cy/viewer.properties": "1e4d4f13f5785e0c4837c40b0937bc51",
"pdfjs/web/locale/da/viewer.properties": "238e12a4f99379d926bd26bd36697d8d",
"pdfjs/web/locale/de/viewer.properties": "81e5d9750ea077f296248f3f3739b180",
"pdfjs/web/locale/dsb/viewer.properties": "b7136e547db12ef226396c0b36e91584",
"pdfjs/web/locale/el/viewer.properties": "511bb598b43ff7a68c2e21d9a4e31f52",
"pdfjs/web/locale/en-CA/viewer.properties": "a6017b126c196dc60773c76050d8dd27",
"pdfjs/web/locale/en-GB/viewer.properties": "91575e4d7330a647fd6efadb450e0910",
"pdfjs/web/locale/en-US/viewer.properties": "a1784c08a174901edc2d833a3d96a690",
"pdfjs/web/locale/eo/viewer.properties": "2ccf545c12d876439449550410a77529",
"pdfjs/web/locale/es-AR/viewer.properties": "b73a0b1ecb6c61986a495fb303607518",
"pdfjs/web/locale/es-CL/viewer.properties": "b16d475e68f68939b64fb8a6ecfdda1d",
"pdfjs/web/locale/es-ES/viewer.properties": "5878e779bc58f7400ec085c461fd1bb7",
"pdfjs/web/locale/es-MX/viewer.properties": "7901427af3cea9cc4a3b12791dcaa904",
"pdfjs/web/locale/et/viewer.properties": "cedf74d47ea430da0d6941af396cdd76",
"pdfjs/web/locale/eu/viewer.properties": "f3bc06fb9536d9b77f66f6960a0f21d6",
"pdfjs/web/locale/fa/viewer.properties": "523da242adbc7271f5f8694f089891a0",
"pdfjs/web/locale/ff/viewer.properties": "ddfc0c4e74e917add1f5d24d760122a3",
"pdfjs/web/locale/fi/viewer.properties": "7e6b75b96496858f9218571d1d5ed14a",
"pdfjs/web/locale/fr/viewer.properties": "cbc1e8ab0751e8873a038dbae3457fe3",
"pdfjs/web/locale/fur/viewer.properties": "b46104c7a55fa5b31d4132292a432795",
"pdfjs/web/locale/fy-NL/viewer.properties": "ff144527a46ecdddd0c2e84ba0e9a09c",
"pdfjs/web/locale/ga-IE/viewer.properties": "b6f9965c55f96c8e1cebb10a7c994cbf",
"pdfjs/web/locale/gd/viewer.properties": "35718fabed38a3c93c272e083bf0acfd",
"pdfjs/web/locale/gl/viewer.properties": "56942c61d4ac886d83f6768e3430a5c4",
"pdfjs/web/locale/gn/viewer.properties": "3b868146056782626de0d99aab3d0acb",
"pdfjs/web/locale/gu-IN/viewer.properties": "1fd3a616c0c9b8b9775f4899e3aa3d38",
"pdfjs/web/locale/he/viewer.properties": "aa91cafc89efe7245ff09453ff9b7ebb",
"pdfjs/web/locale/hi-IN/viewer.properties": "db1fb3e05c15992b73af783b99391a7b",
"pdfjs/web/locale/hr/viewer.properties": "b8bd6a9a40234ac048543073746ef045",
"pdfjs/web/locale/hsb/viewer.properties": "92fea303a09063a31513bd16f3ba2762",
"pdfjs/web/locale/hu/viewer.properties": "f1f58ccdff0810651d8c8e5647ba70be",
"pdfjs/web/locale/hy-AM/viewer.properties": "76b5fbfce100de0cab1202edea6aff1e",
"pdfjs/web/locale/hye/viewer.properties": "1844523d6e1169fa3374d4e31b353a83",
"pdfjs/web/locale/ia/viewer.properties": "7a1d49ff9fe90c6c01476e51bbefaaf8",
"pdfjs/web/locale/id/viewer.properties": "14225830bdd5f26e45802d91e23b064d",
"pdfjs/web/locale/is/viewer.properties": "00d83bf63de7095ed48f6574bb29c85f",
"pdfjs/web/locale/it/viewer.properties": "cf1cf45a9dbc824f028e978b543dfc3e",
"pdfjs/web/locale/ja/viewer.properties": "c80fa140b8ab8b8b8053fa9abdc5df72",
"pdfjs/web/locale/ka/viewer.properties": "11ab177612a31ff1d728db5b4e1fb563",
"pdfjs/web/locale/kab/viewer.properties": "6409a62ae2c0272bd1d1b906a8282661",
"pdfjs/web/locale/kk/viewer.properties": "ba9c900684d081e6cdd8baaee646cf44",
"pdfjs/web/locale/km/viewer.properties": "a653bc52b0a50fa31e88c82c1c5b7394",
"pdfjs/web/locale/kn/viewer.properties": "56653549485a085d69bf7cba2241801c",
"pdfjs/web/locale/ko/viewer.properties": "4e075895b9fb6b94121434e8a38be71c",
"pdfjs/web/locale/lij/viewer.properties": "4a9a8322e3b64238c880b3f680de42ed",
"pdfjs/web/locale/lo/viewer.properties": "4e38a46df8e87fdc9cfe77470dbd4171",
"pdfjs/web/locale/locale.properties": "eaff833cd9c0c659fbcfc7e2520b34ec",
"pdfjs/web/locale/lt/viewer.properties": "6ed88a2fb2a3078ca8eb056056dc8470",
"pdfjs/web/locale/ltg/viewer.properties": "edc5d4d9403b9e68561a2af3e9bfa948",
"pdfjs/web/locale/lv/viewer.properties": "3eae6c7707f5a5321bb2e9cb7a341099",
"pdfjs/web/locale/meh/viewer.properties": "78b61bc8f1039eaadbbe77105b451bbf",
"pdfjs/web/locale/mk/viewer.properties": "f9d4684d668dc7342828169fe9e657e6",
"pdfjs/web/locale/mr/viewer.properties": "d44f85ab631a93b5596dcfc88e1fc11a",
"pdfjs/web/locale/ms/viewer.properties": "02e97334efcafaaebb71340b61ba7510",
"pdfjs/web/locale/my/viewer.properties": "ff7c41c2caf0d146e0ac71b990e48ef7",
"pdfjs/web/locale/nb-NO/viewer.properties": "5e3a990e79c015e79a3b9b3e73125c2b",
"pdfjs/web/locale/ne-NP/viewer.properties": "80882d0fcdb976bbf94d482362a021ee",
"pdfjs/web/locale/nl/viewer.properties": "0ff6d7fab84115349a4d8a7a835194d7",
"pdfjs/web/locale/nn-NO/viewer.properties": "9f7f8c985b14570252be58c9e21658da",
"pdfjs/web/locale/oc/viewer.properties": "d19e41b3bd5ed32047a61a61d1e515b0",
"pdfjs/web/locale/pa-IN/viewer.properties": "4ef6efd0a7c729736a6ce1e7c9ed107a",
"pdfjs/web/locale/pl/viewer.properties": "ac6fec6b2e3e35bbf439d2fb6d1d27af",
"pdfjs/web/locale/pt-BR/viewer.properties": "4082590c8fec8e0f221286b44a93363b",
"pdfjs/web/locale/pt-PT/viewer.properties": "84c13b35e1043e67e5c2f0b879c52096",
"pdfjs/web/locale/rm/viewer.properties": "dc7ea724805bfa17bb2b929e93fe8a63",
"pdfjs/web/locale/ro/viewer.properties": "e9299fd58eb3334c6ff1d93d4b58422c",
"pdfjs/web/locale/ru/viewer.properties": "0d5bbb6abc4aae48b020111848b0ef36",
"pdfjs/web/locale/sat/viewer.properties": "c651a2b4d84b75f66912d4b99df5e098",
"pdfjs/web/locale/sc/viewer.properties": "a913a24a5ab06ee79aecef08e240ce4d",
"pdfjs/web/locale/scn/viewer.properties": "808e23b525bff6b605ccf4d9f01c6b98",
"pdfjs/web/locale/sco/viewer.properties": "c81c80195e09785cd7a674f91928a93d",
"pdfjs/web/locale/si/viewer.properties": "a476e29ef7a662319cb8993b2480997e",
"pdfjs/web/locale/sk/viewer.properties": "fc972adddc1d5f0bf5b3c90e308847b4",
"pdfjs/web/locale/skr/viewer.properties": "c1eabec1b99eccdc73ae40f26015138a",
"pdfjs/web/locale/sl/viewer.properties": "8197fc4f1d649fbda376ece95ae870d1",
"pdfjs/web/locale/son/viewer.properties": "14674b802d0862074642ae3836e561b2",
"pdfjs/web/locale/sq/viewer.properties": "247cf94f8ca533101704f4a5d9ea0efd",
"pdfjs/web/locale/sr/viewer.properties": "9aad6cadb7e17c8e8e69c2b356db91e9",
"pdfjs/web/locale/sv-SE/viewer.properties": "ee8210892a1ac478f4fce6f5ec1444c8",
"pdfjs/web/locale/szl/viewer.properties": "91647e2ec12d63e99b4431b82723b046",
"pdfjs/web/locale/ta/viewer.properties": "8789c7567f83e282731c54e49c3b507d",
"pdfjs/web/locale/te/viewer.properties": "590f8b52bc288ff36604473067ba958d",
"pdfjs/web/locale/tg/viewer.properties": "10c0ba792dd51392935b16a2da2de32d",
"pdfjs/web/locale/th/viewer.properties": "72b35783ae4e9736b2cac4d1b80052fa",
"pdfjs/web/locale/tl/viewer.properties": "b50dd75530a452072c8cb11e0b2fd5b2",
"pdfjs/web/locale/tr/viewer.properties": "bf7ca2ddb4bacba4265d7515c36af78c",
"pdfjs/web/locale/trs/viewer.properties": "7e85e893509008d9d0c16846ac499673",
"pdfjs/web/locale/uk/viewer.properties": "df7e1daaa5c89a8b7c9864fe72821d30",
"pdfjs/web/locale/ur/viewer.properties": "05b742543aa8ea1034a2947c3cb8cf58",
"pdfjs/web/locale/uz/viewer.properties": "1f7238a4988a2eb30051a89798193b31",
"pdfjs/web/locale/vi/viewer.properties": "25ecb03228cb6129fe985f5f529ef7d5",
"pdfjs/web/locale/wo/viewer.properties": "0fbb7106d10ada2b6f11e11cf33e3ad7",
"pdfjs/web/locale/xh/viewer.properties": "05ed3d4daa2d264cb7db6ec3ee5d09ae",
"pdfjs/web/locale/zh-CN/viewer.properties": "074ba57fa983c0ad549bc12e8271c259",
"pdfjs/web/locale/zh-TW/viewer.properties": "dd37b299f3d1aa9567806aa22431c6e5",
"pdfjs/web/standard_fonts/FoxitDingbats.pfb": "0ede4a10145bb9a3cfb4cf53fe3e6f22",
"pdfjs/web/standard_fonts/FoxitFixed.pfb": "7a3a4872294289b49d4b2f396d4ec2f4",
"pdfjs/web/standard_fonts/FoxitFixedBold.pfb": "4225d6a0b272fc4ce8369911f1184c3c",
"pdfjs/web/standard_fonts/FoxitFixedBoldItalic.pfb": "02c104df79fe576e33d0ada201e84ebb",
"pdfjs/web/standard_fonts/FoxitFixedItalic.pfb": "1fe3439747ae310e7f40810d4f82a451",
"pdfjs/web/standard_fonts/FoxitSans.pfb": "985c1cdb7f9753136ecc6c2a8c3b683d",
"pdfjs/web/standard_fonts/FoxitSansBold.pfb": "23920fb57fb4b5fb554f75f6fc2e5152",
"pdfjs/web/standard_fonts/FoxitSansBoldItalic.pfb": "460f6cc61190788bd05ab37c23d59c08",
"pdfjs/web/standard_fonts/FoxitSansItalic.pfb": "eab34161ed520ec96ed2e06f6d3f81f6",
"pdfjs/web/standard_fonts/FoxitSerif.pfb": "65b3795a07441301ba4baacf5b3c9381",
"pdfjs/web/standard_fonts/FoxitSerifBold.pfb": "1cd12e9c39eb66347c75e32cb1d9660e",
"pdfjs/web/standard_fonts/FoxitSerifBoldItalic.pfb": "727374189158907be1f3da01c224f0f3",
"pdfjs/web/standard_fonts/FoxitSerifItalic.pfb": "317e621502668c351d7da56d5f49142c",
"pdfjs/web/standard_fonts/FoxitSymbol.pfb": "bf32dea01c56a04d7acede124ce34203",
"pdfjs/web/standard_fonts/LiberationSans-Bold.ttf": "a720cdc76cacedfaaddc13de2bb7e6b5",
"pdfjs/web/standard_fonts/LiberationSans-BoldItalic.ttf": "c190aa8a01fe181754e83d8fe9d6425d",
"pdfjs/web/standard_fonts/LiberationSans-Italic.ttf": "d235bec3a6ae3a86fec2a79f2ab42c97",
"pdfjs/web/standard_fonts/LiberationSans-Regular.ttf": "dceebf9db79d2acf4a12b8ef7c6fda3e",
"pdfjs/web/standard_fonts/LICENSE_FOXIT": "defd64fe3646eb60a5d01fcbcc8b6b7c",
"pdfjs/web/standard_fonts/LICENSE_LIBERATION": "f96db970a9a46c5369142b99f530366b",
"pdfjs/web/viewer.css": "f004dba0021b901164c97ab3c59a499d",
"pdfjs/web/viewer.html": "09880ea7013178447ca00044a5658221",
"pdfjs/web/viewer.js": "210521ffc01a3baf7ded7030a48039ca",
"pdfjs/web/viewer.js.map": "23024559d3a676877fef7266ec837a70",
"version.json": "512437efb75f2773f30b070e251e6152"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
