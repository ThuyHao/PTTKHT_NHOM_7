function createInstance() {
  var InventoryList = [
    {
      id: 1,
      statusId:1,
      checkBy: "Lê Minh Long",
      status: "Đã xác nhận",
      description: "Kiểm tra càng sớm càng tốt",
      createAt: "01/02/2019",
      checkAt: "03/02/2019",
      listProduct: [{
        name: "Bàn ăn gỗ Theresa",
        quantity: 15,
        realQuantity: 15,
      },{
        name: "Bàn ăn Vitali mặt đá",
        quantity: 30,
        realQuantity: 30,
      }],
    },
    {
      id: 2,
      checkBy: "Huỳng Công Đạt",
      statusId:0,
      status: "Chưa xác nhận",
      description: "Mai kiểm tra gấp",
      createAt: "13/05/2023",
      checkAt: "",
      listProduct: [
        {
          name: "Bàn ăn Reno mặt đá",
          quantity: 12,
          realQuantity: 0,
        },
        {
          name: "Bàn ăn gỗ Theresa",
          quantity: 15,
          realQuantity: 0,
        }
      ],
    },
    {
      id: 3,
      checkBy: "Mai Hữu Lộc",
      statusId:1,
      status: "Đã xác nhận",
      description: "Hoàn thành trong tuần",
      createAt: "03/09/2020",
      checkAt: "07/09/2020",
      listProduct: [{
        name: "Bàn ăn Vitali mặt đá",
        quantity: 30,
        realQuantity: 30,
      },{
        name: "Bàn ăn gỗ Theresa",
        quantity: 15,
        realQuantity: 15,
      }],
    },
    {
      id: 4,
      checkBy: "Lê Minh Long",
      statusId:1,
      status: "Đã xác nhận",
      description: "Kiểm tra càng sớm càng tốt",
      createAt: "04/05/2019",
      checkAt: "06/05/2019",
      listProduct: [{
        name: "Ghế làm việc Zuno",
        quantity: 19,
        realQuantity: 18,
      },
      {
        name: "Bàn ăn Vitali mặt đá",
        quantity: 30,
        realQuantity: 27,
      },{
        name: "Bàn ăn gỗ Theresa",
        quantity: 15,
        realQuantity: 10,
      }],
    },
    {
      id: 5,
      checkBy: "Lê Minh Long",
      statusId:0,
      status: "Chưa xác nhận",
      description: "Kiểm tra càng sớm càng tốt",
      createAt: "01/02/2019",
      checkAt: "03/02/2019",
      listProduct: [{
        name: "Bàn ăn gỗ Theresa",
        quantity: 12,
        realQuantity: 0,
      },
      {
        name: "Ghế làm việc Zuno",
        quantity: 19,
        realQuantity: 0,
      },
      {
        name: "Bàn ăn Vitali mặt đá",
        quantity: 30,
        realQuantity: 0,
      },{
        name: "Bàn ăn gỗ Theresa",
        quantity: 15,
        realQuantity: 0,
      }],
    },
    {
      id: 6,
      checkBy: "Mai Hữu Lộc",
      statusId:0,
      status: "Chưa xác nhận",
      description: "Hoàn thành trong tuần",
      createAt: "01/02/2021",
      checkAt: "03/02/2021",
      listProduct: [{
        name: "Bàn ăn mặt gốm vân đá Cera",
        quantity: 18,
        realQuantity: 0,
      },{
        name: "Bàn ăn Vitali mặt đá",
        quantity: 30,
        realQuantity: 0,
      },{
        name: "Bàn ăn gỗ Theresa",
        quantity: 15,
        realQuantity: 0,
      }],
    },
    {
      id: 7,
      checkBy: "Lê Minh Long",
      statusId:1,
      status: "Đã xác nhận",
      description: "Kiểm tra càng sớm càng tốt",
      createAt: "06/02/2019",
      checkAt: "09/02/2019",
      listProduct: [{
        name: "Bàn ăn gỗ Theresa",
        quantity: 15,
        realQuantity: 15,
      },{
        name: "Bàn ăn Reno mặt đá",
        quantity: 12,
        realQuantity: 12,
      },
     ],
    },
    {
      id: 8,
      checkBy: "Lê Minh Long",
      statusId:1,
      status: "Đã xác nhận",
      description: "Kiểm tra càng sớm càng tốt",
      createAt: "10/02/2019",
      checkAt: "15/02/2019",
      listProduct: [{
        name: "Bàn ăn gỗ Theresa",
        quantity: 15,
        realQuantity: 15,
      },{
        name: "Bàn ăn Reno mặt đá",
        quantity: 12,
        realQuantity: 12,
      }],
    },
    {
      id: 9,
      checkBy: "Lê Minh Long",
      statusId:1,
      status: "Đã xác nhận",
      description: "Kiểm tra càng sớm càng tốt",
      createAt: "15/02/2019",
      checkAt: "17/02/2019",
      listProduct: [{
        name: "Bàn ăn gỗ Theresa",
        quantity: 15,
        realQuantity: 15,
      },
      {
        name: "Bàn ăn mặt gốm vân đá Cera",
        quantity: 18,
        realQuantity: 18,
      },{
        name: "Bàn ăn Vitali mặt đá",
        quantity: 30,
        realQuantity: 30,
      }],
    },
    {
      id: 10,
      checkBy: "Lê Minh Long",
      statusId:1,
      status: "Đã xác nhận",
      description: "Kiểm tra càng sớm càng tốt",
      createAt: "16/02/2019",
      checkAt: "18/02/2019",
      listProduct: [{
        name: "Bàn ăn gỗ Theresa",
        quantity: 15,
        realQuantity: 15,
      },
      {
        name: "Bàn ăn Vitali mặt đá",
        quantity: 30,
        realQuantity: 30,
      }],
    },
    {
      id: 11,
      checkBy: "Lê Minh Long",
      statusId:1,
      status: "Đã xác nhận",
      description: "Kiểm tra càng sớm càng tốt",
      createAt: "18/02/2019",
      checkAt: "20/02/2019",
      listProduct: [{
        name: "Bàn ăn gỗ Theresa",
        quantity: 15,
        realQuantity: 15,
      }],
    },
  ];
  localStorage.setItem("Inventory", JSON.stringify(InventoryList));
}

