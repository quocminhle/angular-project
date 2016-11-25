<div id="pop-avatar" class="custom-popup custom-popupAnimation">
	<div class="pop-head">
		<h3>Cắt hình</h3>
	</div>
	<st-cropper
	crop-image="{{popupScope.image}}"
	crop-ratio="{{popupScope.ratio}}"
	crop-width="{{popupScope.width}}"
	crop-height="{{popupScope.height}}"
	crop-event="{{popupScope.event}}"
	crop-mime="{{popupScope.mimeType}}">
	</st-cropper>
</div>