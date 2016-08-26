protected void Page_Load(object sender, EventArgs e) {
    if (this.IsPostBack == false) {
        string callback = "";
        if (Request["callback"] != null) {
            callback = Request["callback"]; //服务器端要返回的数据                string data = "1024"; 
            Response.Write(callback + "(" + data + ")");           
        }
    }
}
