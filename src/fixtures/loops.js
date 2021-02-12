export const getData = (flat = false) => { 
  const data = [
    {
      "id": "1",
      "icon": "1.svg",
      "hint": "пустая петля"
    },
    {
      "id": "3",
      "icon": "3.svg",
      "hint": "лицевая"
    },
    {
      "id": "3",
      "icon": "61.svg",
      "hint": "изнаночная"
    },
    {
      "id": "4",
      "icon": "2.svg",
      "hint": "кромочная"
    },
    {
      "id": "5",
      "icon": "5.svg",
      "hint": "2 петли провязать вместе изнаночной"
    },
    {
      "id": "6",
      "icon": "6.svg",
      "hint": "2 петли снять как, при лицевом вязании, <br> вернуть петли на левую спицу и провязать <br> их вместе изнаночной скрещенной"
    },
    {
      "id": "7",
      "icon": "7.svg",
      "hint": "2 петли провязать вместе лицевой с наклоном вправо"
    },
    {
      "id": "8",
      "icon": "8.svg",
      "hint": "2 петли провязать вместе лицевой с наклоном влево: <br> 1 петлю снять как лицевую, 1 лицевая, затем протянуть ее <br> через снятую петлю"
    },
    {
      "id": "9",
      "icon": "9.svg",
      "hint": "3 петли провязать вместе лицевой с наклоном влево"
    },
    {
      "id": "10",
      "icon": "10.svg",
      "hint": "3 петли провязать вместе изнаночной"
    },
    {
      "id": "11",
      "icon": "11.svg",
      "hint": "3 петли провязать вместе лицевой"
    },
    {
      "id": "12",
      "icon": "12.svg",
      "hint": "из 1 петли вывязать 2: <br> сначала провязать 1 петлю лицевой <br> и, не снимая ее с левой спицы, провязать <br> еще раз лицевой скрещенной",
      "options": [
        {
          "id": "13",
          "icon": "13.svg",
          "hint": "из 1 петли вывязать 3: <br> 1 лицевую петлю, 1 лицевую скрещенную <br> петлю и 1 лицевую петлю",
        },
        {
          "id": "14",
          "icon": "14.svg"
        },
        {
          "id": "15",
          "icon": "15.svg"
        },
        {
          "id": "16",
          "icon": "16.svg"
        }
      ]
    },
    {
      "id": "18",
      "icon": "18.svg",
      "hint": "1 лицевая скрещенная петля"
    },
    {
      "id": "19",
      "icon": "19.svg",
      "hint": "1 изнаночная скрещенная петля"
    },
    {
      "id": "20",
      "icon": "20.svg",
      "hint": "снять одну петлю, оставив нить перед работой"
    },
    {
      "id": "21",
      "icon": "21.svg",
      "hint": "1 петлю снять, как при изнаночном вязании, оставив нить за работой"
    },
    {
      "id": "22",
      "icon": "22.svg",
      "hint": "2 петли провязать вместе лицевой скрещенной"
    },
    {
      "id": "23",
      "icon": "23.svg",
      "hint": "2 петли провязать вместе изнаночной скрещенной"
    },
    {
      "id": "24",
      "icon": "24.svg",
      "hint": "1 лицевую скрещенную петлю провязать из протяжки"
    },
    {
      "id": "25",
      "icon": "25.svg",
      "hint": "1 изнаночную скрещенную петлю провязать из протяжки"
    },
    {
      "id": "26",
      "icon": "26.svg",
      "hint": "шишечка: из 1 петли вывязать 3: <br/> 1 лицевую петлю, 1 лицевую <br/> скрещенную петлю, <br/> 1 лицевую петлю, повернуть <br/> полотно, вязать 3 изнаночные <br/> петли, повернуть полотно, снять <br/> 2 петли, как при лицевом <br/> вязании, 1 лицевую петлю, <br/> накинуть снятые петли <br/> на провязанную"
    },
    {
      "id": "27",
      "icon": "27.svg",
      "hint": "накид",
      "options": [
        {
          "id": "28",
          "icon": "28.svg",
          "hint": "2 накида"
        },
        {
          "id": "29",
          "icon": "29.svg",
          "hint": "3 накида"
        },
        {
          "id": "30",
          "icon": "30.svg",
          "hint": "4 накида"
        },
        {
          "id": "31",
          "icon": "31.svg",
          "hint": "5 накидов"
        },
        {
          "id": "32",
          "icon": "32.svg",
          "hint": "6 накидов"
        },
      ]
    },
    {
      "id": "17",
      "icon": "17.svg",
      "hint": "3 петли провязать вместе лицевой с центральной петлей сверху"
    },
    {
      "id": "33",
      "icon": "33.svg",
      "hint": "спустить петли до накида"
    },
    {
      "id": "34",
      "icon": "34.svg",
      "hint": "1 петлю снять как при изнаночном вязании, <br> сбросив дополнительную петлю"
    },
    {
      "id": "35",
      "icon": "35.svg",
      "hint": "1 лицевая петля, при этом нить дважды обвить вокруг спицы <br> и протянуть оба накида через петлю"
    },
    {
      "id": "36",
      "icon": "36.svg",
      "hint": "1 лицевая петля, при этом сбросить один <br> из двух накидов предыдущего ряда"
    },
    {
      "id": "37",
      "icon": "37.svg",
      "hint": "1 петлю с накидом провязать вместе лицевой"
    },
    {
      "id": "38",
      "icon": "38.svg",
      "hint": "1 петлю с накидом провязать вместе изнаночной"
    }
  ]

  for (let j = 39; j <= 61; j++) {
    data.push({
      id: j,
      icon: `${j}.svg`
    })
  }


  if (flat) {
    const result = []

    data.forEach(element => {
      const { id, hint, icon, options } = element

      result.push({ id, hint, icon })

      if (options) options.forEach(child => {
        result.push(child)
      })
    })

    return result
  }

  return data
}
