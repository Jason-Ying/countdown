let dailyEventList =
	[["0758", "0848", "0949", "1043", "1258", "1348", "1444", "1538", "1700"],
	["0758", "0848", "0949", "1043", "1228", "1318", "1408", "1504", "1558", "1700"],
	["0758", "0848", "0949", "1043", "1258", "1348", "1444", "1538", "1700"]];
let dailyEventMusic =
	[[0, 0, 3, 0, 0, 0, 3, 0, 6],
	[0, 0, 3, 0, 0, 0, 0, 3, 0, 6],
	[0, 0, 3, 0, 0, 0, 3, 0, 6]];

let timeStampList =
	[["0800", "0840", "0850", "0930", "0955", "1035", "1045", "1125", "1300", "1340", "1350", "1430", "1450", "1530", "1540", "1630"],
	["0800", "0840", "0850", "0930", "0955", "1035", "1045", "1125", "1230", "1310", "1320", "1400", "1410", "1450", "1510", "1550", "1600", "1650"],
	["0800", "0840", "0850", "0930", "0955", "1035", "1045", "1125", "1300", "1340", "1350", "1430", "1450", "1530", "1540", "1630"]];
let timeStampDescrPre =
	[["第一节课", "第一节课", "第二节课", "第二节课", "第三节课", "第三节课", "第四节课", "第四节课", "第五节课", "第五节课", "第六节课", "第六节课", "第七节课", "第七节课", "第八节课", "第八节课"],
	["第一节课", "第一节课", "第二节课", "第二节课", "第三节课", "第三节课", "第四节课", "第四节课", "第五节课", "第五节课", "第六节课", "第六节课", "第七节课", "第七节课", "第八节课", "第八节课", "第九节课", "第九节课"],
	["第一节课", "第一节课", "第二节课", "第二节课", "第三节课", "第三节课", "第四节课", "第四节课", "第五节课", "第五节课", "第六节课", "第六节课", "第七节课", "第七节课", "第八节课", "第八节课"]];
let timeStampDescrSub =
	[["上课", "下课", "上课", "下课", "上课", "下课", "上课", "下课", "上课", "下课", "上课", "下课", "上课", "下课", "上课", "下课"],
	["上课", "下课", "上课", "下课", "上课", "下课", "上课", "下课", "上课", "下课", "上课", "下课", "上课", "下课", "上课", "下课", "上课", "下课"],
	["上课", "下课", "上课", "下课", "上课", "下课", "上课", "下课", "上课", "下课", "上课", "下课", "上课", "下课", "上课", "下课"]];
let timeStampMusic =
	[[1, 2, 1, 2, -1, 2, 1, 2, 1, 2, 1, 2, 1, 2, -1, 2],
	[1, 2, 1, 2, -1, 2, 1, 2, 1, 2, 1, 2, 1, 2, -1, 2, 1, 2],
	[1, 2, 1, 2, -1, 2, 1, 2, 1, 2, 1, 2, 1, 2, -1, 2]];

let schedList =
	[
		[ // Junior
			[ // Z1
				[
					["历史", "升旗仪式", "英语", "数学", "语文", "音乐", "体育", "自修"],
					["语文", "语文", "数学", "英语", "体育", "信息科技", "信息科技", "自修"],
					["外教", "英语", "数学", "数学", "语文", "体育", "自修", "科学"],
					["数学", "语文", "IMMAX", "艺术", "历史", "思想政治", "英语", "TFT英语/自习"],
					["英语", "数学", "科学与创造", "科学与创造", "TFT语文", "美术", "班会", "无"]
				],
				[
					["数学", "升旗仪式", "英语", "体育", "音乐", "语文", "信息科技", "信息科技"],
					["语文", "语文", "思想政治", "数学", "体育", "英语", "历史", "自修"],
					["数学", "数学", "语文", "英语", "外教", "IMMAX", "美术", "自修"],
					["语文", "数学", "历史", "科学", "英语", "TFT英语/自习", "科学与创造", "科学与创造"],
					["艺术", "英语", "数学", "TFT语文", "体育", "自修", "班会", "无"]
				],
				[
					["思想政治", "升旗仪式", "数学", "语文", "英语", "体育", "自修", "历史"],
					["数学", "艺术", "语文", "语文", "信息科技", "信息科技", "英语", "体育"],
					["历史", "英语", "语文", "数学", "数学", "音乐", "自修", "IMMAX"],
					["科学与创造", "科学与创造", "数学", "语文", "美术", "外教", "英语", "TFT英语/自习"],
					["科学", "体育", "TFT语文", "数学", "英语", "自修", "班会", "无"]
				],
				[
					["英语", "升旗仪式", "体育", "数学", "科学", "语文", "信息科技", "信息科技"],
					["英语", "数学", "语文", "语文", "艺术", "外教", "体育", "自修"],
					["数学", "数学", "语文", "英语", "历史", "自修", "音乐", "体育"],
					["数学", "语文", "科学与创造", "科学与创造", "英语", "TFT英语/自习", "自修", "思想政治"],
					["TFT语文", "数学", "英语", "IMMAX", "美术", "历史", "班会", "无"]
				],
				[
					["英语", "升旗仪式", "音乐", "体育", "语文", "数学", "信息科技", "信息科技"],
					["语文", "语文", "数学", "英语", "科学", "历史", "外教", "体育"],
					["思想政治", "语文", "英语", "数学", "数学", "美术", "IMMAX", "自修"],
					["语文", "数学", "英语", "TFT英语/自习", "艺术", "自修", "科学与创造", "科学与创造"],
					["英语", "TFT语文", "数学", "体育", "历史", "自修", "班会", "无"]
				]
			],
			[ // Z2
				[
					["思想政治", "升旗仪式", "历史/STS", "英语", "数学", "音乐", "语文", "体育"],
					["语文", "语文", "英语", "体育", "数学", "思想政治", "心理", "地理"],
					["数学", "数学", "科学", "历史", "英语", "TFT语文", "物理", "自习"],
					["语文", "TFT数学/TFT英语", "英语", "物理", "数学", "历史", "信息科技", "信息科技"],
					["地理", "英语", "体育", "数学", "语文", "美术", "班会", "无"]
				],
				[
					["物理", "升旗仪式", "英语", "数学", "语文", "地理", "音乐", "体育"],
					["语文", "语文", "数学", "体育", "思想政治", "历史", "英语", "心理"],
					["英语", "思想政治", "数学", "数学", "美术", "TFT语文", "科学", "物理"],
					["语文", "英语", "TFT数学/TFT英语", "数学", "信息科技", "信息科技", "历史", "自习"],
					["语文", "历史/STS", "体育", "地理", "英语", "数学", "班会", "无"]
				],
				[
					["历史/STS", "升旗仪式", "体育", "科学", "地理", "英语", "数学", "语文"],
					["数学", "历史", "语文", "语文", "音乐", "英语", "信息科技", "信息科技"],
					["思想政治", "英语", "数学", "数学", "物理", "体育", "TFT语文", "自习"],
					["TFT数学/TFT英语", "语文", "物理", "英语", "地理", "心理", "数学", "美术"],
					["数学", "历史", "语文", "体育", "英语", "思想政治", "班会", "无"]
				],
				[
					["科学", "升旗仪式", "体育", "英语", "物理", "数学", "心理", "语文"],
					["历史", "数学", "语文", "语文", "信息科技", "信息科技", "英语", "物理"],
					["数学", "数学", "历史/STS", "音乐", "英语", "体育", "TFT语文", "自习"],
					["历史", "英语", "语文", "TFT数学/TFT英语", "数学", "地理", "美术", "思想政治"],
					["语文", "数学", "思想政治", "体育", "英语", "地理", "班会", "无"]
				],
				[
					["英语", "升旗仪式", "体育", "地理", "数学", "语文", "历史", "美术"],
					["语文", "语文", "信息科技", "信息科技", "数学", "英语", "物理", "历史"],
					["数学", "数学", "体育", "英语", "音乐", "科学", "TFT语文", "自习"],
					["语文", "体育", "数学", "英语", "TFT数学/TFT英语", "物理", "思想政治", "心理"],
					["语文", "数学", "历史/STS", "思想政治", "地理", "英语", "班会", "无"]
				]
			],
			[ // Z3
				[
					["化学", "升旗仪式", "语文", "科学", "英语", "思想政治", "体育", "数学"],
					["物理", "数学", "英语", "TFT英语", "体育", "语文", "TFT语文", "地理"],
					["化学", "英语", "数学", "TFT数学", "物理", "思想政治", "体育", "音乐"],
					["英语", "美术", "语文", "语文", "数学", "化学", "地理", "物理"],
					["英语", "化学", "语文", "科学/自修", "数学", "物理", "班会", "无"]
				],
				[
					["英语", "升旗仪式", "语文", "美术", "化学", "数学", "体育", "思想政治"],
					["英语", "TFT英语", "数学", "音乐", "体育", "物理", "科学", "语文"],
					["数学", "TFT数学", "英语", "地理", "化学", "语文", "体育", "物理"],
					["数学", "物理", "语文", "TFT语文", "思想政治", "英语", "化学", "地理"],
					["语文", "英语", "物理", "数学", "科学/自修", "化学", "班会", "无"]
				],
				[
					["语文", "升旗仪式", "化学", "思想政治", "科学/自修", "英语", "数学", "体育"],
					["化学", "数学", "英语", "TFT英语", "美术", "语文", "体育", "物理"],
					["数学", "TFT数学", "地理", "体育", "英语", "物理", "语文", "科学"],
					["语文", "TFT语文", "英语", "地理", "化学", "物理", "数学", "音乐"],
					["思想政治", "语文", "数学", "物理", "化学", "英语", "班会", "无"]
				],
				[
					["物理", "升旗仪式", "化学", "英语", "思想政治", "数学", "语文", "体育"],
					["英语", "TFT英语", "语文", "数学", "化学", "地理", "体育", "科学"],
					["数学", "TFT数学", "英语", "体育", "地理", "科学/自修", "物理", "语文"],
					["语文", "TFT语文", "思想政治", "物理", "数学", "英语", "化学", "美术"],
					["语文", "英语", "化学", "数学", "物理", "音乐", "班会", "无"]
				],
				[
					["思想政治", "升旗仪式", "物理", "化学", "体育", "语文", "英语", "数学"],
					["英语", "TFT英语", "体育", "语文", "数学", "科学", "地理", "化学"],
					["语文", "英语", "数学", "TFT数学", "科学/自修", "物理", "音乐", "思想政治"],
					["英语", "地理", "语文", "TFT语文", "物理", "化学", "美术", "数学"],
					["英语", "语文", "物理", "化学", "数学", "体育", "班会", "无"]
				]
			]
		],
		[ // Senior
			[ // G1
				[
					["语文", "升旗仪式", "英语", "数学", "劳技", "物理", "化学", "思想政治", "无"],
					["语文", "语文", "音乐/美术", "数学", "英语", "化学", "地理", "体育", "物理"],
					["生物", "化学", "思想政治", "历史", "数学", "英语", "语文", "体育", "TI"],
					["数学", "语文", "体育", "历史", "物理", "化学", "英语", "思想政治", "特需自修"],
					["信息科技", "信息科技", "数学", "英语", "历史", "物理", "班会", "无", "无"]
				],
				[
					["英语", "升旗仪式", "语文", "化学", "历史", "物理", "数学", "思想政治", "无"],
					["物理", "数学", "语文", "语文", "化学", "英语", "劳技", "体育", "历史"],
					["历史", "音乐/美术", "思想政治", "生物", "数学", "语文", "TI", "体育", "英语"],
					["信息科技", "信息科技", "体育", "语文", "物理", "数学", "化学", "英语", "特需自修"],
					["地理", "化学", "英语", "物理", "思想政治", "数学", "班会", "无", "无"]
				],
				[
					["数学", "升旗仪式", "英语", "化学", "语文", "体育", "物理", "劳技", "无"],
					["语文", "语文", "数学", "历史", "英语", "化学", "物理", "信息科技", "信息科技"],
					["思想政治", "历史", "音乐/美术", "化学", "体育", "数学", "语文", "TI", "英语"],
					["英语", "体育", "语文", "数学", "历史", "物理", "思想政治", "生物", "特需自修"],
					["数学", "地理", "英语", "思想政治", "物理", "化学", "班会", "无", "无"]
				],
				[
					["英语", "升旗仪式", "物理", "数学", "思想政治", "体育", "TI", "语文", "无"],
					["数学", "物理", "语文", "语文", "化学", "英语", "历史", "劳技", "生物"],
					["信息科技", "信息科技", "化学", "地理", "体育", "数学", "英语", "语文", "音乐/美术"],
					["语文", "体育", "思想政治", "数学", "物理", "英语", "历史", "化学", "特需自修"],
					["英语", "化学", "思想政治", "历史", "数学", "物理", "班会", "无", "无"]
				],
				[
					["思想政治", "升旗仪式", "数学", "英语", "体育", "化学", "语文", "物理", "无"],
					["语文", "语文", "数学", "劳技", "生物", "英语", "化学", "物理", "体育"],
					["历史", "物理", "化学", "思想政治", "数学", "TI", "语文", "英语", "体育"],
					["信息科技", "信息科技", "语文", "数学", "物理", "历史", "化学", "英语", "特需自修"],
					["地理", "英语", "数学", "音乐/美术", "思想政治", "历史", "班会", "无", "无"]
				],
				[
					["化学", "升旗仪式", "英语", "数学", "体育", "语文", "物理", "TI", "劳技"],
					["历史", "数学", "语文", "语文", "英语", "思想政治", "生物", "化学", "体育"],
					["物理", "历史", "信息科技", "信息科技", "数学", "语文", "音乐/美术", "英语", "体育"], // ["物理", "历史", "信息科技", "信息科技", "语文", "数学", "音乐/美术", "英语", "体育"],
					["英语", "数学", "化学", "语文", "地理", "物理", "特需自修", "特需自修", "特需自修"],
					["化学", "数学", "历史", "英语", "物理", "思想政治", "班会", "无", "无"],
				]
			],
			[ // G2
				[
					["英语", "升旗仪式", "语文", "数学", "地理D", "生物D", "政治H", "化学H4/化学D3", "无"],
					["语文", "语文", "音乐/心理", "数学", "物理H5/物理H6/物理H7/物理D3", "英语", "体育", "历史H", "地理D"],
					["历史H", "物理D3/历史D2/政治D2", "生物D", "地理D", "体育", "英语", "语文", "数学", "数学"],
					["英语", "英语", "政治H", "语文", "数学", "生物D", "地理D", "物理H5/物理H6/物理H7/物理D3", "化学H4/化学D3"],
					["语文", "体育", "英语", "化学D3/历史D1/政治D1", "生物D", "数学", "班会", "无", "无"]
				],
				[
					["数学", "升旗仪式", "英语", "语文", "历史H", "生物D", "地理D", "化学H6/化学D2", "无"],
					["数学", "生物D", "语文", "语文", "物理H5/物理H6/物理H7/物理D3", "历史H", "体育", "地理D", "英语"],
					["生物D", "物理D3/历史D2", "地理D", "政治H", "体育", "语文", "英语", "数学", "数学"],
					["音乐/心理", "语文", "英语", "英语", "数学", "地理D", "政治H", "物理H5/物理H6/物理H7/物理D3", "化学H6/化学D2"],
					["英语", "体育", "数学", "化学D2/历史D1/政治D1", "语文", "生物D", "班会", "无", "无"]
				],
				[
					["数学", "升旗仪式", "英语", "生物D", "地理D", "历史H", "语文", "化学H5/化学H6/化学D2", "无"],
					["语文", "语文", "数学", "英语", "物理H5/物理H6/物理H7/物理D4", "地理D", "生物D", "体育", "政治H"],
					["地理D", "物理D4/历史D2/政治D2", "历史H", "生物D", "语文", "数学", "数学", "英语", "体育"],
					["英语", "英语", "语文", "生物D", "音乐/心理", "地理D", "数学", "物理H5/物理H6/物理H7/物理D4", "化学H5/化学H6/化学D2"],
					["数学", "英语", "语文", "化学D2/历史D1/政治D1", "体育", "政治合格考", "班会", "无", "无"]
				],
				[
					["语文", "升旗仪式", "地理D", "英语", "生物D", "历史H", "数学", "化学H4/化学H5/化学D1/化学D3", "无"],
					["英语", "数学", "语文", "语文", "物理H5/物理H6/物理H7/物理D4", "生物D", "政治H", "体育", "地理D"],
					["生物D", "物理D4/历史D2/政治D2", "地理D", "音乐/心理", "英语", "数学", "数学", "语文", "体育"],
					["数学", "语文", "英语", "英语", "地理D", "政治H", "生物D", "物理H5/物理H6/物理H7/物理D4", "化学H4/化学H5/化学D1/化学D3"],
					["语文", "历史H", "数学", "化学D1/化学D3/历史D1/政治D1", "体育", "英语", "班会", "无", "无"]
				],
				[
					["地理D", "升旗仪式", "英语", "数学", "历史H", "语文", "生物D", "化学H5/化学H6/化学D3", "无"],
					["英语", "数学", "语文", "语文", "物理H5/物理H6/物理H7/物理D2", "体育", "生物D", "地理D", "历史H"],
					["政治H", "物理D2/历史D2", "地理D", "体育", "音乐/心理", "数学", "数学", "英语", "语文"],
					["英语", "英语", "生物D", "语文", "政治H", "数学", "地理D", "物理H5/物理H6/物理H7/物理D2", "化学H5/化学H6/化学D3"],
					["数学", "英语", "体育", "化学D3/历史D1/政治D1", "语文", "生物D", "班会", "无", "无"]
				],
				[
					["历史H", "升旗仪式", "地理D", "英语", "数学", "语文", "生物D", "化学H5/化学D1", "无"],
					["数学", "英语", "语文", "语文", "物理H5/物理H6/物理H7/物理D1", "体育", "地理D", "政治H", "生物D"],
					["地理D", "物理D1/历史D2", "生物D", "体育", "语文", "音乐/心理", "英语", "数学", "数学"],
					["语文", "数学", "英语", "英语", "生物D", "地理D", "历史H", "物理H5/物理H6/物理H7/物理D1", "化学H5/化学D1"],
					["语文", "数学", "体育", "化学D1/历史D1", "英语", "政治", "班会", "无", "无"]
				]
			],
			[ // G3
				[
					["英语", "升旗仪式", "英语", "数学", "数学", "化学D1/历史D1/政治D1", "物理D2/历史D2", "语文", "语文"],
					["数学", "数学", "英语", "英语", "【数据缺失】", "【数据缺失】", "【数据缺失】", "化学D1/历史D1/政治D1", "化学D1/历史D1/政治D1"],
					["英语", "英语", "物理D2/历史D2", "物理D2/历史D2", "数学", "数学", "体育", "语文", "语文"],
					["自修", "体育", "语文", "语文", "化学D1/历史D1/政治D1", "数学", "数学", "英语", "英语"],
					["数学", "数学", "英语", "英语", "物理D2/历史D2", "体育", "语文", "班会", "无"]
				],
				[
					["英语", "升旗仪式", "英语", "数学", "数学", "化学D3/历史D1/政治D1", "物理D1/物理D3", "语文", "语文"],
					["数学", "数学", "英语", "英语", "语文", "语文", "语文", "化学D3/历史D1/政治D1", "化学D3/历史D1/政治D1"],
					["英语", "英语", "物理D1/物理D3", "物理D1/物理D3", "语文", "语文", "体育", "数学", "数学"],
					["语文", "体育", "语文", "自修", "化学D3/历史D1/政治D1", "数学", "数学", "英语", "英语"],
					["数学", "数学", "英语", "英语", "物理D1/物理D3", "体育", "语文", "班会", "无"]
				],
				[
					["英语", "升旗仪式", "英语", "数学", "数学", "化学D3/历史D1/政治D1", "物理D1/物理D3", "语文", "语文"],
					["数学", "数学", "英语", "英语", "语文", "语文", "语文", "化学D3/政治D1", "化学D3/政治D1"],
					["英语", "英语", "物理D3/历史D2", "物理D3/历史D2", "语文", "体育", "语文", "数学", "数学"],
					["语文", "语文", "自修", "体育", "化学D3/政治D1", "数学", "数学", "英语", "英语"],
					["语文", "数学", "体育", "数学", "物理D3/历史D2", "英语", "英语", "班会", "无"]
				],
				[
					["英语", "升旗仪式", "英语", "语文", "语文", "化学D2/历史D1/政治D1", "物理D2/历史D2", "数学", "数学"],
					["数学", "数学", "英语", "英语", "语文", "语文", "语文", "化学D2/历史D1/政治D1", "化学D2/历史D1/政治D1"],
					["英语", "英语", "物理D2/历史D2", "物理D2/历史D2", "语文", "体育", "语文", "数学", "数学"],
					["语文", "语文", "自修", "体育", "化学D2/历史D1/政治D1", "数学", "数学", "英语", "英语"],
					["语文", "英语", "体育", "英语", "物理D2/历史D2", "数学", "数学", "班会", "无"]
				],
				[
					["数学", "升旗仪式", "英语", "英语", "数学", "化学D1/历史D1", "物理D1/历史D2", "语文", "语文"],
					["数学", "数学", "英语", "英语", "语文", "语文", "语文", "化学D1/历史D1", "化学D1/历史D1"],
					["英语", "英语", "物理D1/历史D2", "物理D1/历史D2", "体育", "语文", "语文", "数学", "数学"],
					["语文", "语文", "体育", "自修", "化学D1/历史D1", "数学", "数学", "英语", "英语"],
					["数学", "数学", "语文", "体育", "物理D1/历史D2", "英语", "英语", "班会", "无"]
				],
				[
					["数学", "升旗仪式", "英语", "英语", "数学", "化学D2/历史D1", "物理D4", "语文", "语文"],
					["数学", "数学", "英语", "英语", "语文", "语文", "语文", "化学D2/历史D1", "化学D2/历史D1"],
					["英语", "英语", "物理D4", "物理D4", "体育", "语文", "语文", "数学", "数学"],
					["语文", "语文", "体育", "自修", "化学D2/历史D1", "数学", "数学", "英语", "英语"],
					["语文", "数学", "数学", "体育", "物理D4", "英语", "英语", "班会", "无"]
				]
			]
		],
		[ // International
			[ // I6
				[ // 6A
					["地理", "升旗仪式", "语文", "BigScienceSTEM", "数学", "英语中教", "中国历史", "无"],
					["数学", "数学", "英语外教", "英语外教", "地理", "语文", "英语中教", "无"],
					["ICT", "ICT", "数学", "BigScienceSTEM", "英语外教", "英语外教", "语文", "无"],
					["语文", "语文", "英语外教", "英语外教", "英语中教", "英语中教", "中国历史", "无"],
					["英语中教", "数学", "数学", "BigScienceSTEM", "语文", "英语中教", "班会", "无"]
				],
				[ // 6B
					["语文", "升旗仪式", "英语中教", "中国历史", "BigScienceSTEM", "数学", "数学", "无"],
					["语文", "语文", "英语外教", "英语外教", "中国历史", "地理", "数学", "无"],
					["语文", "语文", "BigScienceSTEM", "数学", "英语外教", "英语外教", "英语中教", "无"],
					["英语中教", "英语中教", "英语外教", "英语外教", "数学中教", "ICT", "ICT", "无"],
					["数学", "英语中教", "英语中教", "语文", "BigScienceSTEM", "地理", "班会", "无"]
				]
			],
			[ // I7
				[ // 7A
					["地理", "升旗仪式", "ICT", "ICT", "英语外教", "英语外教", "语文", "数学"],
					["英语外教", "英语外教", "生物", "生物", "语文", "英语中教", "英语中教", "无"],
					["英语中教", "英语中教", "语文", "语文", "数学", "数学", "世界历史", "世界历史"],
					["英语中教", "英语中教", "语文", "化学", "数学", "数学", "物理", "物理"],
					["英语外教", "英语外教", "语文", "数学", "地理", "自习", "班会", "无"]
				],
				[ // 7B
					["数学", "升旗仪式", "物理", "化学", "英语外教", "英语外教", "英语中教", "语文"],
					["英语外教", "英语外教", "语文", "英语中教", "生物", "生物", "物理", "无"],
					["语文", "语文", "数学", "英语", "ICT", "ICT", "地理", "数学"],
					["语文", "数学", "数学", "地理", "英语中教", "英语中教", "世界历史", "世界历史"],
					["英语外教", "英语外教", "数学", "英语中教", "语文", "自习", "班会", "无"]
				]
			],
			[ // I8
				[ // 8A
					["生物", "升旗仪式", "数学", "数学", "化学", "英语中教", "语文", "语文"],
					["化学", "数学", "ICT", "ICT", "英语中教", "英语中教", "语文", "无"],
					["数学", "英语外教", "英语外教", "英语中教", "生物", "化学", "物理", "物理"],
					["英语中教", "物理", "数学", "语文", "世界历史", "世界历史", "英语外教", "英语外教"],
					["语文", "数学", "英语外教", "英语外教", "英语中教", "自习", "班会", "无"]
				],
				[ // 8B
					["化学", "升旗仪式", "语文", "物理", "英语中教", "化学", "数学", "数学"],
					["数学", "化学", "ICT", "ICT", "物理", "语文", "英语中教", "无"],
					["英语中教", "英语外教", "英语外教", "物理", "世界历史", "世界历史", "数学", "语文"],
					["语文", "数学", "生物", "生物", "英语中教", "英语中教", "英语外教", "英语外教"],
					["数学", "英语中教", "英语外教", "英语外教", "语文", "自习", "班会", "无"]
				],
				[ // 9A
					["英语", "升旗仪式", "英语", "语文", "Computer Science", "Computer Science", "Physics", "Chemistry"],
					["语文", "语文", "数学", "数学", "选修", "选修", "Chemistry", "Chemistry"],
					["Biology", "Biology", "Business", "Business", "Physics", "Physics", "Computer Science", "Computer Science"],
					["英语", "英语", "Physics", "Physics", "Biology", "Biology", "Business", "Business"],
					["数学", "数学", "Chemistry", "Chemistry", "英语", "英语", "班会", "Biology"]
				],
				[ // 10A
					["数学", "升旗仪式", "数学", "Physics", "英语", "英语", "Economics", "Economics"],
					["数学", "数学", "Economics", "Economics", "选修", "选修", "Biology", "Biology"],
					["Physics", "Physics", "Chemistry", "Chemistry", "Biology", "Biology", "英语", "英语"],
					["Biology", "Biology", "英语", "英语", "Physics", "Physics", "Chemistry", "Chemistry"],
					["Chemistry", "Chemistry", "数学", "数学", "Economics", "Economics", "班会", "Physics"]
				]
			]
		]
	];
let spanList = ["放学", "课间", "大课间", "课间", "午休", "课间", "课间", "大课间", "课间", "放学"];

let daySwapFrom = ["2022/4/2", "2022/4/24", "2022/5/4"];
let daySwapTo = ["2022/4/4", "2022/5/3", "2022/5/7"];
let dayOff = ["2022/4/5", "2022/5/1", "2022/5/2", "2022/5/3"];