<div ng-include="'views/menu/view.tpl'"></div>
<div id="mdl-home" class="mdl">
	<div class="container">
		<h1>Home</h1>
		<h3>Paging</h3>
		<drt-pager page-state="home" page-params="home.queryParams"></drt-pager>
		<h3>Popup</h3>
		<a ng-click="home.pop_video()" class="btn btn-primary">Video Popup</a>
		<a ng-click="home.popup_gallery_image()" class="btn btn-primary">Popup Gallery Image</a>
		<a ng-click="home.popup_gallery_inline()" class="btn btn-primary">Popup Gallery Inline</a>
		<br>
		<h3>Form</h3>
		<div class="row">
			<div class="col-md-4">
				<label role="switcher">
					<input type="checkbox">
					<i></i>
					<span></span>
				</label>
				<br>
				<label role="switcher">
					<input type="checkbox" checked>
					<i></i>
					<span></span>
				</label>
				<br>
				<label role="switcher">
					<input type="checkbox" checked disabled>
					<i></i>
					<span></span>
				</label>
			</div>
			<div class="col-md-4">
				<label role="checkbox" for="check1">
					<input role="checkbox" id="check1" type="checkbox">
					<i></i>
					<span>Normal</span>
				</label>
				<br>
				<label role="checkbox" for="check2">
					<input role="checkbox" id="check2" type="checkbox" checked>
					<i></i>
					<span>Checked</span>
				</label>
				<br>
				<label role="checkbox" for="check3">
					<input role="checkbox" id="check3" type="checkbox" checked disabled>
					<i></i>
					<span>Disabled</span>
				</label>
			</div>
			<div class="col-md-4">
				<label role="radio" for="opt2">
					<input role="radio" id="opt2" type="radio" name="radioGroup">
					<i></i>
					<span>Normal</span>
				</label>
				<br>
				<label role="radio" for="opt1">
					<input role="radio" id="opt1" type="radio" name="radioGroup" checked>
					<i></i>
					<span>Selected</span>
				</label>
				<br>
				<label role="radio" for="opt3">
					<input role="radio" id="opt3" type="radio" checked disabled>
					<i></i>
					<span>Disabled</span>
				</label>
			</div>
		</div>
		<div class="row">
			<div class="col-md-4">
				<div class="drt-calendar" drt-calendar>
					<select id="c-month">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
					</select>
					<select id="c-year">
						<option value="2016">2016</option>
					</select>
					<div class="c-head">
						<a>CN</a>
						<a>T2</a>
						<a>T3</a>
						<a>T4</a>
						<a>T5</a>
						<a>T6</a>
						<a>T7</a>
					</div>
					<div class="c-body"></div>
					<div class="c-time">
					<select id="c-hour">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
							<option value="13">13</option>
							<option value="14">14</option>
							<option value="15">15</option>
							<option value="16">16</option>
							<option value="17">17</option>
							<option value="18">18</option>
							<option value="19">19</option>
							<option value="20">20</option>
							<option value="21">21</option>
							<option value="22">22</option>
							<option value="23">23</option>
							<option value="24">24</option>
						</select>
						<select id="c-minute">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>