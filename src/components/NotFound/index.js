const { LinkR } = require("../Link/LinkElement");
const { NotFoundWrapper, NotFoundHeading } = require("./NotFoundElements");

const NotFound = () => {
  return (
    <>
      <NotFoundWrapper>
        <NotFoundHeading>404 - Taka strona nie istnieje</NotFoundHeading>
        <LinkR to="/">Home</LinkR>
      </NotFoundWrapper>
    </>
  );
};

export default NotFound;
