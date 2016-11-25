<div ng-include="'views/menu/view.tpl'"></div>
<div id="mdl-contact" class="mdl">
	<div class="container">
		<h1>Contact</h1>
		<div class="jumbotron">
			<form novalidate name="frmContact" ng-submit="contact.submit(frmContact.$valid)">
				<!-- Firstname -->
				<div class="control-group">
					<label for="txtFirstName">Tên <span class="require">(*)</span></label>
					<div class="input-with-msg">
						<input class="form-control" id="txtFirstName" name="txtFirstName" type="text" ng-mdlel="contact.formData.firstname" ng-pattern="/[a-zA-Z0-9]/" required />
						<div class="messages-error" ng-messages="frmContact.txtFirstName.$error" ng-if="contact.submitted">
							<div ng-message="required">Bạn chưa nhập tên.</div>
							<div ng-message="pattern">Tên không được chứa các ký tự đặc biệt.</div>
						</div>
					</div>
				</div>
				<!-- Lastname -->
				<div class="control-group">
					<label for="txtLastName">Họ <span class="require">(*)</span></label>
					<div class="input-with-msg">
						<input class="form-control" id="txtLastName" name="txtLastName" type="text" ng-model="contact.formData.lastname" ng-pattern="/[a-zA-Z0-9]/" required />
						<div class="messages-error" ng-messages="frmContact.txtLastName.$error" ng-if="contact.submitted">
							<div ng-message="required">Bạn chưa nhập họ.</div>
							<div ng-message="pattern">Tên không được chứa các ký tự đặc biệt.</div>
						</div>
					</div>
				</div>
				<!-- Gender -->
				<div class="control-group">
					<label for="ddlGender">Gender <span class="require">(*)</span></label>
					<div class="input-with-msg">
						<select name="ddlGender" class="form-control" ng-model="contact.formData.gender" required>
							<option value="">Select</option>
							<option value="male">Nam</option>
							<option value="female">Nữ</option>
						</select>
						<div class="messages-error" ng-messages="frmContact.ddlGender.$error" ng-if="contact.submitted">
							<div ng-message="required">Bạn chưa chọn giới tính.</div>
						</div>
					</div>
				</div>
				<!-- Email -->
				<div class="control-group">
					<label for="txtEmail">Email <span class="require">(*)</span></label>
					<div class="input-with-msg">
						<input class="form-control" id="txtEmail" name="txtEmail" type="text" st-valid-exist="{selector:'#mod-contact .existEmailWrap',url:'http://dev.bizzon.com.vn/wyeth-calendar/api/login/checkvalid',value:contact.formData.email,type:'email'}" ng-model="contact.formData.email" ng-pattern="/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/" required />
						<div class="messages-error" ng-messages="frmContact.txtEmail.$error" ng-if="contact.submitted">
							<div ng-message="required">Bạn chưa nhập email.</div>
							<div ng-message="pattern">Email không hợp lệ.</div>
						</div>
					</div>
					<!-- <div class="messages-error" ng-if="frmContact.txtEmail.$error.recordexist">Email đã tồn tại.</div> -->
					<div class="existEmailWrap">Email đã tồn tại.</div>
				</div>
				<!-- Số điện thoại -->
				<div class="control-group">
					<label for="txtPhone">Số điện thoại <span class="require">(*)</span></label>
					<div class="input-with-msg">
						<input class="form-control" id="txtPhone" name="txtPhone" type="text" ng-model="contact.formData.phone" ng-minlength="10" ng-maxlength="11" ng-pattern="/^[0][0-9]*$/" required />
						<div class="messages-error" ng-messages="frmContact.txtPhone.$error" ng-if="contact.submitted">
							<div ng-message="required">Bạn chưa nhập số điện thoại.</div>
							<div ng-message="minlength">Số điện thoại ít nhất 9 số.</div>
							<div ng-message="maxlength">Số điện thoại tối đa 11 số.</div>
							<div ng-message="pattern">Số điện thoại không hợp lệ, nhập số 0 trước.</div>
						</div>
					</div>
				</div>
				<!-- Nội dung -->
				<div class="control-group">
					<label for="txtMessage">Nội dung <span class="require">(*)</span></label>
					<div class="input-with-msg">
						<textarea class="form-control" id="txtMessage" name="txtMessage" ng-model="contact.formData.message" st-word-count min-words="5" max-words="10" required /></textarea>
						<div class="messages-error" ng-messages="frmContact.txtMessage.$error" ng-if="contact.submitted">
							<div ng-message="required">Bạn chưa nhập nội dung.</div>
							<div ng-message="maxwords">Nội dung chứa tối đa 10 từ.</div>
							<div ng-message="mixwords">Nội dung chứa ít nhất 5 từ.</div>
						</div>
					</div>
				</div>
				<!-- Đính kèm file -->
				<div class="control-group">
					<label for="txtFile">Đính kèm tập tin <span class="require">(*)</span></label>
					<div class="input-with-msg">
						<input type="file" class="form-control" id="txtFile" name="txtFile" st-valid-file-input file-size="300000" file-type="image/jpeg,image/png" accept=".jpg,.png,.jpeg|images/*" ng-model="contact.formData.attachment" multiple required />
						<div class="messages-error" ng-messages="frmContact.txtFile.$error" ng-if="contact.submitted">
							<div ng-message="required">Bạn chưa chọn tập tin.</div>
							<div ng-message="filesize">Kích thước tập tin quá lớn, chỉ hỗ trợ tối đa 500kb.</div>
							<div ng-message="filetype">Tập tin không hỗ trợ.</div>
						</div>
					</div>
				</div>
				<!-- Submit -->
				<st-submit class="btn btn-primary btn-submit" ng-class="{'loading-btn': contact.lockForm}" ng-disabled="contact.lockForm" type="submit">Gửi</st-submit>
				<pre class="ng-cloak">{{contact.formData | json}}</pre>
			</form>
		</div>
	</div>
</div>