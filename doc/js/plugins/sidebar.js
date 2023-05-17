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
    let listnhanvien = page =="listnhanvien"?"active":"";
    let deleteFixNView_nhanvien = page == "deleteFixNView-nhanvien"?"active":"";
    let editacc = page =="editaccount"?"active":"";
    let importcou = page=="import"?"active":"";
    let money =page=="money"?"active":"";
    let attendance =page=="attendance"?"active":"";
    let calender =page=="calender"?"active":"";
    let productmanager =page=="product-manager"?"active":"";
    let assetmanager = page=="asset"?"active":"";
    let addImportCoupon = page == "addImportCoupon"?"active":"";
    let ImportCouponPage = page == "ImportCouponPage"?"active":"";

    let PrintImportCoupon = page == "PrintImportCoupon"?"active":"";
    let PrintExportCoupon = page == "PrintExportCoupon"?"active":"";
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
              <p class="app-sidebar__user-name"><b>Nhật Minh</b></p>
              <p class="app-sidebar__user-designation">Quản trị viên</p>
            </div>
          </div>
          <hr />
          <ul class="app-menu">
          <li><a class="app-menu__item haha" href="phan-mem-ban-hang.html"><i
          class='app-menu__icon bx bx-cart-alt'></i>
      <span class="app-menu__label">POS Bán Hàng</span></a></li>
        <li>
            <a class="app-menu__item ${index}" href="index.html"><i class="app-menu__icon bx bx-tachometer"></i><span
                    class="app-menu__label">Bảng điều khiển</span></a>
        </li>
        <li>
            <a class="app-menu__item ${listnhanvien}" href="table-data-table.html"><i
                    class="app-menu__icon bx bx-id-card"></i>
                <span class="app-menu__label">Quản lý nhân viên</span></a>
        </li>
        <li><a class="app-menu__item ${productmanager}" href="Product_Management.html"><i
                    class='app-menu__icon bx bx-purchase-tag-alt'></i><span class="app-menu__label">Quản lý sản
                    phẩm</span></a>
        </li>
        <li><a class="app-menu__item ${assetmanager}" href="AssetManagerPage.html"><i
                    class='app-menu__icon bx bx-purchase-tag-alt'></i><span class="app-menu__label">Quản lý tài
                    sản</span></a>
        </li>
        <li><a class="app-menu__item ${OrderManagerment}" href="order_management.html"><i
                    class='app-menu__icon bx bx-task'></i><span class="app-menu__label">Quản lý đơn hàng</span></a></li>

        <li> <a class="app-menu__item ${InventoryManagerment}" href="InventoryManagerment.html"><i
                    class="app-menu__icon fas fa-notes-medical"></i><span class="app-menu__label">Kiểm kê kho</span></a>
        </li>
        <li><a class="app-menu__item ${calender}" href="page-calendar.html"><i
                    class='app-menu__icon bx bx-calendar-check'></i><span class="app-menu__label">Lịch công tác
                </span></a></li>
        <li><a class="app-menu__item ${attendance}" href="diemdanh.html"><i
                    class='app-menu__icon bx bx-calendar-check'></i><span class="app-menu__label">Điểm danh
                </span></a></li>
       
        <li><a class="app-menu__item ${add_export}" href="add-export-coupon.html"><i
                    class="app-menu__icon bx bx-plus-circle"></i><span class="app-menu__label">Tạo phiếu xuất
                    kho</span></a></li>
        <li><a class="app-menu__item ${search_export}" href="explore-lookup-page.html"><i
                    class='app-menu__icon bx bx-search'></i><span class="app-menu__label">Tra cứu xuất kho
                </span></a></li>
        <li><a class="app-menu__item ${addImportCoupon}" href="AddImportCouponPage.html"><i
                    class="app-menu__icon bx bx-plus-circle"></i><span class="app-menu__label">Tạo phiếu nhập
                    kho</span></a></li>
        <li><a class="app-menu__item ${ImportCouponPage}" href="ImportCouponPage.html"><i
                    class='app-menu__icon bx bx-search'></i><span class="app-menu__label">Tra cứu nhập kho
                </span></a></li>
        <li><a class="app-menu__item ${PrintExportCoupon}" href="PrintExportPage.html"> <i class="fas fa-print">
                </i><span class="app-menu__label">&nbsp;&nbsp;&nbsp; In phiếu xuất kho
                </span></a></li>
        <li><a class="app-menu__item ${PrintImportCoupon}" href="PrintImportPage.html"> <i class="fas fa-print">
                </i><span class="app-menu__label">&nbsp;&nbsp;&nbsp; In phiếu nhập kho
                </span></a></li>
                <li>
                <a class="app-menu__item ${editacc}" href="#"><i
                        class="app-menu__icon bx bx-cog"></i><span class="app-menu__label">Quản lý hệ thống</span></a>
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
     
                    <li><a class="app-menu__item ${index} " href="index.html"><i class='app-menu__icon bx bx-tachometer'></i><span
                    class="app-menu__label">Bảng điều khiển</span></a></li>
            <li><a class="app-menu__item ${productmanager}"href="Product_Management.html"><i
                        class='app-menu__icon bx bx-purchase-tag-alt'></i><span class="app-menu__label">Quản lý sản
                        phẩm</span></a> 
            <li><a class="app-menu__item ${assetmanager}" href="AssetManagerPage.html"><i
                class='app-menu__icon bx bx-purchase-tag-alt'></i><span class="app-menu__label">Quản lý tài sản</span></a>
          </li>
            <li><a class="app-menu__item ${OrderManagerment}" href="order_management.html"><i class='app-menu__icon bx bx-task'></i><span
                        class="app-menu__label">Quản lý đơn hàng</span></a></li>
           
          <li>  <a class="app-menu__item ${InventoryManagerment}" href="InventoryManagerment.html"
          ><i class="app-menu__icon fas fa-notes-medical"></i><span class="app-menu__label">Kiểm kê kho</span></a
        ></li>
            <li><a class="app-menu__item ${calender}" href="page-calendar.html"><i
                        class='app-menu__icon bx bx-calendar-check'></i><span class="app-menu__label">Lịch công tác
                    </span></a></li>
                    <li><a class="app-menu__item ${attendance}" href="diemdanh.html"><i
                      class='app-menu__icon bx bx-calendar-check'></i><span class="app-menu__label">Điểm danh
                  </span></a></li>
                  <li>
                  <a class="app-menu__item ${editacc}" href="page-infomation-account.html"
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
              <p class="app-sidebar__user-name"><b>Hữu Lộc</b></p>
              <p class="app-sidebar__user-designation">Vận chuyển</p>
            </div>
          </div>
          <hr>
          <ul class="app-menu">
                 <li><a class="app-menu__item ${index} " href="index.html"><i class='app-menu__icon bx bx-tachometer'></i><span
                        class="app-menu__label">Bảng điều khiển</span></a></li>
          <li><a class="app-menu__item ${sidebar}" href="all-order-page.html"><i class='app-menu__icon bx bx-task'></i><span
                    class="app-menu__label">Quản lý đơn hàng</span></a></li>

            </ul>`;
              break;
            case "inventory":      
              sidebarDom =`
              <div class="app-sidebar__user"><img class="app-sidebar__user-avatar" src="/images/hay.jpg" width="50px"
            alt="User Image">
          <div>
            <p class="app-sidebar__user-name"><b>Nhật Nam</b></p>
            <p class="app-sidebar__user-designation">Nhân viên kho</p>
          </div>
        </div>
        <hr>
        <ul class="app-menu">

        <li><a class="app-menu__item ${index} " href="index.html"><i class='app-menu__icon bx bx-tachometer'></i><span
                    class="app-menu__label">Bảng điều khiển</span></a></li>
        <li><a class="app-menu__item ${add_export}" href="add-export-coupon.html"><i
                    class="app-menu__icon bx bx-plus-circle"></i><span class="app-menu__label">Tạo phiếu xuất
                    kho</span></a></li>
        <li><a class="app-menu__item ${search_export}" href="explore-lookup-page.html"><i
                    class='app-menu__icon bx bx-search'></i><span class="app-menu__label">Tra cứu xuất kho
                </span></a></li>
        <li><a class="app-menu__item ${addImportCoupon}" href="AddImportCouponPage.html"><i
                    class="app-menu__icon bx bx-plus-circle"></i><span class="app-menu__label">Tạo phiếu nhập
                    kho</span></a></li>
        <li><a class="app-menu__item ${ImportCouponPage}" href="ImportCouponPage.html"><i
                    class='app-menu__icon bx bx-search'></i><span class="app-menu__label">Tra cứu nhập kho
                </span></a></li>
        <li><a class="app-menu__item ${PrintExportCoupon}" href="PrintExportPage.html"> <i class="fas fa-print">
                </i><span class="app-menu__label">&nbsp;&nbsp;&nbsp; In phiếu xuất kho
                </span></a></li>
        <li><a class="app-menu__item ${PrintImportCoupon}" href="PrintImportPage.html"> <i class="fas fa-print">
                </i><span class="app-menu__label">&nbsp;&nbsp;&nbsp; In phiếu nhập kho
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
    
      <li><a class="app-menu__item  ${index}" href="index.html"><i class='app-menu__icon bx bx-tachometer'></i><span
            class="app-menu__label">Bảng điều khiển</span></a></li>
      <li><a class="app-menu__item ${accounting}" href="KPI.html"><i class='app-menu__icon bx bx-right-top-arrow-circle'></i>
          <span class="app-menu__label">Đặt KPI</span></a></li>
      <li><a class="app-menu__item ${money}" href="table-data-money.html"><i class='app-menu__icon bx bx-dollar'></i><span
            class="app-menu__label">Bảng kê lương</span></a></li>
      <li><a class="app-menu__item ${pay}" href="all-order-pay.html"><i
            class='app-menu__icon bx bx-pie-chart-alt-2'></i><span class="app-menu__label">Báo cáo doanh thu</span></a>
      </li>
      <li><a class="app-menu__item ${importcou}" href="ImportCoupon.html"><i class='app-menu__icon bx bx-calendar-check'></i><span
            class="app-menu__label">Xem phiếu nhập kho </span></a></li>
            <li><a class="app-menu__item  ${viewexport}" href="Export-Coupon-page.html"><i class='app-menu__icon bx bx-calendar-check'></i><span
            class="app-menu__label">Xem phiếu xuất kho </span></a></li>
            <li>
 
            <a class="app-menu__item ${editacc}" href="page-infomation-account.html"
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