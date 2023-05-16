function renderSideBar(page){
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    let index = page=="index"?"active":"";
    let InventoryManagerment = page=="inventory"?"active":"";
    let OrderManagerment = page=="order"?"active":"";;
    let add_export = page=="add-export"?"active":"";
    let search_export = page=="search-export"?"active":"";
    let sidebar = page=="show-page"?"active":"";
    let viewexport = page=="view-export"?"active":"";
    let pay =page=="Order-pay"?"active":"";
    let accounting =page=="accounting"?"active":"";
    let add_nhanvien = page =="add-nhanvien"?"active":"";
    let deleteFixNView_nhanvien = page == "deleteFixNView-nhanvien"?"active":"";
    var sidebarDom;
    if (loggedUser) {
      switch (loggedUser.role) {
        case "admin":
            sidebarDom=`
            <div class="app-sidebar__user">
            <a href="page-infomation-account.html"><img
              class="app-sidebar__user-avatar"
              src="/images/hay.jpg"
              width="50px"
              alt="User Image"
            />
            </a> 
            <div>
              <p class="app-sidebar__user-name"><b>Võ Trường</b></p>
              <p class="app-sidebar__user-designation">Chào mừng bạn trở lại</p>
            </div>
          </div>
          <hr />
          <ul class="app-menu">
            <li>
              <a class="app-menu__item haha" href="phan-mem-ban-hang.html"
                ><i class="app-menu__icon bx bx-cart-alt"></i>
                <span class="app-menu__label">POS Bán Hàng</span></a
              >
            </li>
            <li>
              <a class="app-menu__item ${index}" href="index.html"
                ><i class="app-menu__icon bx bx-tachometer"></i
                ><span class="app-menu__label">Bảng điều khiển</span></a
              >
            </li>
            <li>
              <a class="app-menu__item" ${add_nhanvien} href="form-add-nhan-vien.html"
                ><i class="app-menu__icon bx bx-id-card"></i>
                <span class="app-menu__label">Quản lý nhân viên</span></a
              >
            </li>
            <li>
              <a class="app-menu__item" ${deleteFixNView_nhanvien} href="table-data-table.html"
                ><i class="app-menu__icon bx bx-id-card"></i>
                <span class="app-menu__label">Quản lý nhân viên</span></a
              >
            </li>
            <li>
              <a class="app-menu__item" href="#"
                ><i class="app-menu__icon bx bx-user-voice"></i
                ><span class="app-menu__label">Quản lý khách hàng</span></a
              >
            </li>
            <li>
              <a class="app-menu__item" href="Product_Management.html"
                ><i class="app-menu__icon bx bx-purchase-tag-alt"></i
                ><span class="app-menu__label">Quản lý sản phẩm</span></a
              >
            </li>
            <li>
              <a class="app-menu__item ${OrderManagerment}" href="order_management.html"
                ><i class="app-menu__icon bx bx-task"></i
                ><span class="app-menu__label">Quản lý đơn hàng</span></a
              >
            </li>
            <li>
              <a class="app-menu__item" href="table-data-banned.html"
                ><i class="app-menu__icon bx bx-run"></i
                ><span class="app-menu__label">Quản lý nội bộ </span></a
              >
            </li>
            <li>
              <a class="app-menu__item" href="table-data-money.html"
                ><i class="app-menu__icon bx bx-dollar"></i
                ><span class="app-menu__label">Bảng kê lương</span></a
              >
            </li>
            <li>
              <a class="app-menu__item" href="quan-ly-bao-cao.html"
                ><i class="app-menu__icon bx bx-pie-chart-alt-2"></i
                ><span class="app-menu__label">Báo cáo doanh thu</span></a
              >
            </li>
            <li>
              <a class="app-menu__item" href="page-calendar.html"
                ><i class="app-menu__icon bx bx-calendar-check"></i
                ><span class="app-menu__label">Lịch công tác </span></a
              >
            </li>
            <li>
              <a class="app-menu__item" href="page-infomation-account.html"
                ><i class="app-menu__icon bx bx-cog"></i
                ><span class="app-menu__label">Quản lý hệ thống</span></a
              >
            </li>
            <li>
              <a class="app-menu__item ${InventoryManagerment}" href="InventoryManagerment.html"
                ><i class="app-menu__icon bx bx-cog"></i
                ><span class="app-menu__label">Quản lý kiểm kê</span></a
              >
            </li>
          </ul>
            `
          break;
        case "inventoryManager":
            sidebarDom=`
            <div class="app-sidebar__user"> <a href="page-infomation-account.html"><img
            class="app-sidebar__user-avatar"
            src="/images/hay.jpg"
            width="50px"
            alt="User Image"
          />
          </a> 
            <div>
                <p class="app-sidebar__user-name"><b>Nhật Linh</b></p>
                <p class="app-sidebar__user-designation">Quản lý kho</p>
            </div>
        </div>
        <hr>
        <ul class="app-menu">
            <li><a class="app-menu__item haha" href="phan-mem-ban-hang.html"><i
                        class='app-menu__icon bx bx-cart-alt'></i>
                    <span class="app-menu__label">POS Bán Hàng</span></a></li>
     
            
            <li><a class="app-menu__item " href="Product_Management.html"><i
                        class='app-menu__icon bx bx-purchase-tag-alt'></i><span class="app-menu__label">Quản lý sản
                        phẩm</span></a>
            </li>
            <li><a class="app-menu__item" href="AssetManagerPage.html"><i
                class='app-menu__icon bx bx-purchase-tag-alt'></i><span class="app-menu__label">Quản lý tài sản</span></a>
          </li>
            <li><a class="app-menu__item" href="order_management.html"><i class='app-menu__icon bx bx-task'></i><span
                        class="app-menu__label">Quản lý đơn hàng</span></a></li>
           
          <li><a class="app-menu__item ${InventoryManagerment}" href="InventoryManagerment.html"
            ><i class="app-menu__icon bx bx-cog"></i
            ><span class="app-menu__label">Quản lý kiểm kê</span></a
          ></li>
            <li><a class="app-menu__item" href="page-calendar.html"><i
                        class='app-menu__icon bx bx-calendar-check'></i><span class="app-menu__label">Lịch công tác
                    </span></a></li>
                    <li><a class="app-menu__item" href="diemdanh.html"><i
                      class='app-menu__icon bx bx-calendar-check'></i><span class="app-menu__label">Điểm danh
                  </span></a></li>
                  <li>
                  <a class="app-menu__item" href="page-infomation-account.html"
                    ><i class="app-menu__icon bx bx-cog"></i
                    ><span class="app-menu__label">Quản lý hệ thống</span></a
                  >
                </li>
        </ul>
            `
            break;
            case "shipper":
              sidebarDom=` <div class="app-sidebar__user"><img class="app-sidebar__user-avatar" src="/images/hay.jpg" width="50px"
              alt="User Image">
            <div>
              <p class="app-sidebar__user-name"><b>Locendou</b></p>
              <p class="app-sidebar__user-designation">Chào mừng bạn trở lại</p>
            </div>
          </div>
          <hr>
          <ul class="app-menu">
                 <li><a class="app-menu__item " href="index.html"><i class='app-menu__icon bx bx-tachometer'></i><span
                        class="app-menu__label">Bảng điều khiển</span></a></li>
          <li><a class="app-menu__item ${sidebar}" href="all-order-page.html"><i class='app-menu__icon bx bx-task'></i><span
                    class="app-menu__label">Quản lý đơn hàng</span></a></li>

            </ul>`;
              break;
            case "inventor":      
              sidebarDom =`
              <div class="app-sidebar__user"><img class="app-sidebar__user-avatar" src="/images/hay.jpg" width="50px"
            alt="User Image">
          <div>
            <p class="app-sidebar__user-name"><b>Locendou</b></p>
            <p class="app-sidebar__user-designation">Chào mừng bạn trở lại</p>
          </div>
        </div>
        <hr>
        <ul class="app-menu">
         
          
          <li><a class="app-menu__item ${add_export}" href="add-export-coupon.html"><i class="app-menu__icon bx bx-plus-circle"></i><span
              class="app-menu__label" >Tạo phiếu xuất kho</span></a></li>
              <li><a class="app-menu__item ${search_export}" href="explore-lookup-page.html"><i class='app-menu__icon bx bx-search'></i><span
                class="app-menu__label">Tra cứu xuất kho
              </span></a></li>
              
        
        </ul>
              `;
              break;
        case "accounting":
            sidebarDom=`
            <div class="app-sidebar__user">
            <a href="page-infomation-account.html"><img
            class="app-sidebar__user-avatar"
            src="/images/hay.jpg"
            width="50px"
            alt="User Image"
          />
          </a> 
            <div>
              <p class="app-sidebar__user-name"><b>Thúy Hảo</b></p>
              <p class="app-sidebar__user-designation">Kế toán</p>
            </div>
          </div>
          <hr />
          
<ul class="app-menu">
      <li><a class="app-menu__item haha" href="phan-mem-ban-hang.html"><i class='app-menu__icon bx bx-cart-alt'></i>
          <span class="app-menu__label">POS Bán Hàng</span></a></li>
      <li><a class="app-menu__item " href="index.html"><i class='app-menu__icon bx bx-tachometer'></i><span
            class="app-menu__label">Bảng điều khiển</span></a></li>
      <li><a class="app-menu__item" href="KPI.html"><i class='app-menu__icon bx bx-right-top-arrow-circle'></i>
          <span class="app-menu__label">Đặt KPI</span></a></li>
      <li><a class="app-menu__item" href="table-data-money.html"><i class='app-menu__icon bx bx-dollar'></i><span
            class="app-menu__label">Bảng kê lương</span></a></li>
      <li><a class="app-menu__item ${pay}" href="all-order-pay.html"><i
            class='app-menu__icon bx bx-pie-chart-alt-2'></i><span class="app-menu__label">Báo cáo doanh thu</span></a>
      </li>
      <li><a class="app-menu__item ${accounting}" href="ImportCoupon.html"><i class='app-menu__icon bx bx-calendar-check'></i><span
            class="app-menu__label">Xem phiếu nhập kho </span></a></li>
            <li><a class="app-menu__item  ${viewexport}" href="Export-Coupon-page.html"><i class='app-menu__icon bx bx-calendar-check'></i><span
            class="app-menu__label">Xem phiếu xuất kho </span></a></li>
            <li>
            <a class="app-menu__item" href="page-infomation-account.html"
              ><i class="app-menu__icon bx bx-cog"></i
              ><span class="app-menu__label">Quản lý hệ thống</span></a
            >
          </li>
    </ul>
            `
          break;
        default:
         
      }
      $("#main-SideBar").html(sidebarDom);
    }
    
}