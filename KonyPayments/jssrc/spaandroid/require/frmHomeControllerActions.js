define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for SegContacts **/
    AS_Segment_dd6c1e7494554a52ac15f2243efb7d1a: function AS_Segment_dd6c1e7494554a52ac15f2243efb7d1a(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.contactSelected();
        // if(this.prevrow!=this.view.SegContacts.selectedRowIndex[1]){
        //   this.animateRows();
        //   this.prevrow=this.view.SegContacts.selectedRowIndex[1];
        //   /*
        //    var rowIndex = this.view.SegContacts.selectedRowIndex[1];
        //    var data1 = this.view.SegContacts.selectedRowItems[0];
        //    data1.flxContacts = {"skin" : "CopyslFbox0g357313e457149"};
        //    data1.btnPayee = {"skin":"btnskn","text":"Pay"};
        //    this.view.SegContacts.setDataAt(data1, rowIndex,0,this.finalAnimation1);
        //    this.view.SegContacts.selectedRowIndex = [0,rowIndex];*/
        //    this.collapsedState = false;
        // }else{
        //   if(this.collapsedState){
        //   this.animateRows();
        //     this.prevrow=this.view.SegContacts.selectedRowIndex[1];
        //     /*
        //    var rowIndex = this.view.SegContacts.selectedRowIndex[1];
        //    var data1 = this.view.SegContacts.selectedRowItems[0];
        //    data1.flxContacts = {"skin" : "flxorangeborder"};
        //    data1.btnPayee = {"skin":"btnskn","text":"Pay"};
        //    this.view.SegContacts.setDataAt(data1, rowIndex,0,this.finalAnimation1);*/
        //   }else{
        //     if(this.prevrow!==null && this.collapsedState===false){
        //   this.animateRows();
        //   // var rowIndex = this.view.SegContacts.selectedRowIndex[1];
        //   /* var data1 = this.view.SegContacts.data[this.prevrow];
        //    data1.flxContacts = {"skin" : "flxorangeborder"};
        //    data1.btnPayee = {"skin":"btnskn","text":"Pay"};
        //    this.view.SegContacts.setDataAt(data1, this.prevrow,0,this.finalAnimation2);*/
        //     }	
        //   }
        //   this.collapsedState = !this.collapsedState;
        // }
    },
    /** onClick defined for Button0ee25da74c4c14a **/
    AS_Button_b581e9fd1d8e4886a178cc7b4c515446: function AS_Button_b581e9fd1d8e4886a178cc7b4c515446(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    },
    /** postShow defined for frmHome **/
    AS_Form_gc83d28d2ff740d29606b08d84b0a9ab: function AS_Form_gc83d28d2ff740d29606b08d84b0a9ab(eventobject) {
        var self = this;
        this.view.SegContacts.setData(this.data);
    }
});