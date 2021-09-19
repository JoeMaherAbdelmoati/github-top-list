import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const RepoCard = ({ item }) => {
  const createdAt = formatDistanceToNow(new Date(item.created_at));
  return (
    <div className={"col-12 ps-3 py-3 d-flex align-items-center repo-item flex-column flex-md-row"}>
      <img
        className={"avatar-image me-3"}
        src={item.owner.avatar_url}
        alt={"user"}
      />
      <div className={"d-flex flex-column"}>
        <h4>{item.name}</h4>
        <h6 className={'repo-description'}>{item.description}</h6>
        <div className={'flex-column flex-md-row d-md-block d-flex'}>
          <span className={"me-3 px-2 py-1 item-box mb-md-0 mb-2 "}>
            Stars: {item.stargazers_count}
          </span>
          <span className={"me-3 px-2 py-1 item-box mb-md-0 mb-2"}>
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
