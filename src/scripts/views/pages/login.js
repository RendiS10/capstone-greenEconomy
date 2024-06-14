const Login = {
  async render() {
    return `
          <article class="login">
        <div class="container">
        <div class="login-section">
            <h1 class="h1-login">Login Admin</h1>
            <form action="#" method="post" class="form-login">
                <label for="username" class="label-login">Nama Pengguna atau Alamat Email</label>
                <input type="text" id="username" name="username" required class="input-login">
                <label for="password" class="label-login">Password</label>
                <input type="password" id="password" name="password" required class="input-login">
                <button type="submit" class="login-button">Login</button>
            </form>
        </div>
        <div class="signup-section">
            <h1 class="h1-login">Welcome</h1>
        </div>
    </div>
    </article>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Login;
