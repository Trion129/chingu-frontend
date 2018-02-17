import React from "react";

// TODO: add verification of data.

const LinksModal = ({ user, onChange, errorMessages }) => {
  let {
    github_url,
    linkedin_url,
    portfolio_url,
    website_url,
    twitter_url,
    blog_url
  } = user;

  function renderLinkToUsername(link, type) {
    if (type === "gh") {
      return `Github Username: ${link.split("/")[3]}`;
    } else if (type === "li") {
      return `LinkedIn Username: ${link.split("/")[4]}`;
    } else if (type === "tw") {
      return `Twitter Username: ${link.split("/")[3]}`;
    }
  }

  return (
    <React.Fragment>
      <div>
        <input
          type="text"
          placeholder={renderLinkToUsername(github_url, "gh") || "Github URL"}
          name="github_url"
          onChange={onChange}
        />
        <div className="errorMessages">{errorMessages.github_url}</div>
      </div>
      <div>
        <input
          type="text"
          placeholder={
            renderLinkToUsername(linkedin_url, "li") || "LinkedIn URL"
          }
          name="linkedin_url"
          onChange={onChange}
        />
        <div className="errorMessages">{errorMessages.linkedin_url}</div>
      </div>
      <div>
        <input
          type="text"
          placeholder={portfolio_url || "Portfolio URL"}
          name="portfolio_url"
          onChange={onChange}
        />
        <div className="errorMessages">{errorMessages.portfolio_url}</div>
      </div>
      <div>
        <input
          type="text"
          placeholder={website_url || "Website URL"}
          name="website_url"
          onChange={onChange}
        />
        <div className="errorMessages">{errorMessages.website_url}</div>
      </div>
      <div>
        <input
          type="text"
          placeholder={renderLinkToUsername(twitter_url, "tw") || "Twitter URL"}
          name="twitter_url"
          onChange={onChange}
        />
        <div className="errorMessages">{errorMessages.twitter_url}</div>
      </div>
      <div>
        <input
          type="text"
          placeholder={blog_url || "Blog URL"}
          name="blog_url"
          onChange={onChange}
        />
        <div className="errorMessages">{errorMessages.blog_url}</div>
      </div>
    </React.Fragment>
  );
};

export default LinksModal;
