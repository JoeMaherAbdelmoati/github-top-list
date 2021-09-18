import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const RepoCard = ({ item }) => {
  const createdAt = formatDistanceToNow(new Date(item.created_at));
  return (
    <div className={"col-12 ps-3 d-flex align-items-center"}>
      <img
        className={"avatar-image me-3"}
        src={item.owner.avatar_url}
        alt={"user"}
      />
      <div className={"d-flex flex-column"}>
        <h4>{item.name}</h4>
        <h6>{item.description}</h6>
        <div>
          <span className={"me-3 px-2 py-1 item-box"}>
            Stars: {item.stargazers_count}
          </span>
          <span className={"me-3 px-2 py-1 item-box"}>
            Issues: {item.open_issues}
          </span>
          <span>{`Submitted ${createdAt} ago by ${item.owner.login}`}</span>
        </div>
      </div>
    </div>
  );
};
RepoCard.propTypes = {
  item: PropTypes.object.isRequired
};
export default RepoCard;
