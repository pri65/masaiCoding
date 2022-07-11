const UserCard = ({data}) => {
  console.log("usercard", data)
  return (
    <>
    {data.data?.map(data => (
      <div
      key={data.id}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "0.5rem"
      }}
      data-testid="user-card"
      >
      <img
        src={data.avatar}
        width="40px"
        style={{ borderRadius: "50%" }}
        data-testid="user-card-img"
      />
      <div data-testid="user-card-name">
        {data.name}
      </div>
    </div>
    ))}
    </>
  );
};

export default UserCard;
