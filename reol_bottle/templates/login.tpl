% rebase('templates/base.tpl', title='Random Files', header='Random Files Directory')

<div class="col-lg px-5 py-3">
    <form action="" method="post">
        <div class="form-group">
            <label for="user">Username</label>
            <input type="text" class="form-control" id="user" name="user">
        </div>
        <div class="form-group">
            <label for="pass">Password</label>
            <input type="password" class="form-control" id="pass" name="pass">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</div>