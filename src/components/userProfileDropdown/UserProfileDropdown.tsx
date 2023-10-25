import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
/* components*/
import Icon from "../icon/Icon";
import TextTruncate from "../textTruncate/TextTruncate";
/* types */
import { UserProfileDropdownType } from "./UserProfileDropdownType";
/* assets */
import profilePicture from "../../assets/img/user/cheems-with-hat.jpg";
import DefaultAvatarImage from "../../assets/img/user/avatar-default.png";
import logo from "../../assets/img/logo/image-banner-logo.png";
/* styles */
import styles from "./userProfileDropdown.module.css";

type userType = {
  name: string;
  picture: string | null;
  path: string;
};

const user: userType | null = /* null; */ {
  name: "Aarón Treviño Del Río",
  picture: profilePicture,
  path: "#",
}; // Example of the possible structure of the user object

const banner = "Get Free Shipping!"; // Example of possible banner

/*
* This component returns a header that contains the user's main information. This includes the profile picture (if the user has provided one), their name, a link to access the user's information page if they are logged in, and an optional banner. If the user is not logged in, it will display an image with an avatar icon and a link inviting them to log in. It's important to note that the component allows for style customization through props; however, it has local styles that adapt to the DropdownMenu component's styles, so all styles provided through props are optional and will override the local styles if provided.

* -"onClick" Function executed when clicking on user information. Possible value: () => void.
* -"isThereBanner" Boolean that, if provided, displays a banner in the bottom section of the profile. Possible values: true or false.
*/

const UserProfileDropdown = ({
  containerCssProp,
  imageContainerCssProp,
  imageCssProp,
  TextContainerCssProp,
  nameTextCssProp,
  profileTextCssProp,
  myProfileTextContainerCssProp,
  textIconCssProp,
  isThereBanner,
  bannerLinkCssProp,
  bannerTextCssProp,
  onCLick, // Close the dropdown menu
}: UserProfileDropdownType) => {
  const isThereUser = user ? { ...user } : null;
  /* Check if there is an image in the user profile */
  const isThereImageProfile = isThereUser
    ? isThereUser.picture
      ? isThereUser.picture
      : false
    : false;
  return (
    <div className={`${styles.localContainer} ${containerCssProp}`}>
      <Link
        onClick={onCLick}
        to={isThereUser ? isThereUser.path : "#"}
        className={styles.profileLink}
      >
        <div
          className={`${styles.localImageContainer} ${imageContainerCssProp}`}
        >
          {/* If user exists and contains an image, the image is added to the profile, otherwise it shows avatar image */}
          <img
            src={isThereImageProfile || DefaultAvatarImage}
            className={
              (isThereImageProfile && `${styles.localImage} ${imageCssProp}`) ||
              `${styles.localDefaultAvatarImage} ${imageCssProp}`
            }
            alt={
              (isThereImageProfile && "Profile picture") ||
              "Default avatar image"
            }
          />
        </div>

        <div className={`${styles.localTextContainer} ${TextContainerCssProp}`}>
          {/* The width100percent class adds width 100% so that the element takes up all the available space, moving the text: "My profile" to the next line. If user does not exist, this class is omitted and the icon is added to the right of the text: "Hello, sign in" */}
          <TextTruncate
            text={(isThereUser?.name && isThereUser.name) || "Hello, sign in"}
            rows={1}
            tagType="h2"
            css={
              isThereUser?.name
                ? `${styles.width100percent} ${styles.localTextName} ${nameTextCssProp}`
                : `${styles.localTextProfile} ${profileTextCssProp}`
            }
          />
          {isThereUser?.name && (
            /* If the user object exists, the text "My profile" is added below the user name */
            <div
              className={`${styles.myProfileTextContainer} ${myProfileTextContainerCssProp}`}
            >
              <span
                className={`${styles.localTextProfile} ${profileTextCssProp}`}
              >
                My profile
              </span>
              <Icon
                icon={faChevronRight}
                css={`
                  ${styles.localTextIcon} ${textIconCssProp}
                `}
              />
            </div>
          )}

          {!isThereUser && (
            /* If the user object does not exist, the container for "My profile" text is ignored and the following icon is added to the right of the text "Hello, sign in" */
            <Icon
              icon={faChevronRight}
              css={`
                ${styles.localTextIcon} ${textIconCssProp}
              `}
            />
          )}
        </div>
      </Link>
      {isThereBanner && banner && (
        <aside>
          <Link
            onClick={onCLick}
            to={"#"}
            className={`${styles.bannerLink} ${bannerLinkCssProp}`}
          >
            <div className={styles.imageAndTextBannerContainer}>
              <div className={styles.imageBannerContainer}>
                <img src={logo} alt="logo" className={styles.bannerImage} />
              </div>
              <span className={`${styles.bannerText} ${bannerTextCssProp}`}>
                {banner}
              </span>
            </div>
            <Icon
              icon={faChevronRight}
              css={`
                ${styles.localTextIcon} ${textIconCssProp}
              `}
            />
          </Link>
        </aside>
      )}
    </div>
  );
};

export default UserProfileDropdown;
