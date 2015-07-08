<?php
  include "tmpl/head.php";
?>  

		<form id="login" class="form" role="form">
	      <div class="server-mes error-mes"></div>
	      <div class="server-mes success-mes"></div>
	      <div class="form-group">
	        <label for="login" class="label">Логин</label>
	        <input type="text" name="login" class="input" id="name" qtip-content="Вы не ввели логин">
	      </div>
	      <div class="form-group">
	        <label for="password" class="label">Пароль</label>
	        <input type="password" name="password" class="input" id="password" qtip-content="Вы не ввели пароль">
	      </div>
		    <button type="submit" class="btn">Войти</button>    
	    </form>

<?php
  include "tmpl/footer.php";
?> 
