const Dashboard = ({user}) => {
  const { name, email} = user;
  return (
    <section className='section'>
      <h1>Dashboard</h1>
      <h4>name: {name}</h4>
      <h4>email: {email}</h4>
    </section>
  );
};
export default Dashboard;
