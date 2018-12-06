

const verifiedCommits = (username, repo, apiToken) =>
  {
    var commitsApiUrl = `https://api.github.com/users/${username}/${repo}/commits?access_token=${apiToken}`;
    fetch(commitsApiUrl)
          .then(response => response.json())
          //filter out commits that are not PGP/GPG verified
          .then(
            commits => {
                return commits.filter(
                  (entry) => {
                    return entry.commit.verification.verified === true
                  }
                );
            }
          )
  };

export default verifiedCommits;
