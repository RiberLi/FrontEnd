function NewFeatureGuide(opts){
	      this.newFeature=opts.newFeature;
      this.$el=$(opts.tpl);
      this.$guideBox=this.$el.find(".feature-guide-box");
}

NewFeatureGuide.prototype.showFeature=function(){
       let $featureBox=$(this.newFeature),
           $featureClone=$featureBox.clone();
       $featureClone.width($featureBox.width())
                   .height($featureBox.height());
       $featureClone.appendTo(this.$guideBox);

       this.$el.show();
       var offset=$featureBox.offset();
       this.$guideBox.css({
       	left:offset.left,
       	top:offset.top
       })
};

$(function(){
	var newFeatureGuide=new NewFeatureGuide({
		newFeature:".broadcast-wrapper",
        tpl:".new-feature-guide"
	})
	newFeatureGuide.showFeature();
});