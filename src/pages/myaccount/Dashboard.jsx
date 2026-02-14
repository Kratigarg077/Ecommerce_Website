export default function Dashboard({ user }) {
  return (
    <div className="myaccount-content">
      <h3>Dashboard</h3>

      <div className="welcome">
        <p>Hello, <strong>{user.name}</strong></p>
      </div>

      <p className="mb-0">
        From your account dashboard you can view recent orders, manage billing
        addresses and edit your password.
      </p>
    </div>
  );
}
