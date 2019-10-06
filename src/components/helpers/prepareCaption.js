/**
 * Return the props for the Caption component.
 * TODO: document returned props.
 *
 * @param {Object} props
 * @return {Object}
 */
export default function prepareCaption(props) {
  const { styles, classNames } = props;
  return {
    props: {
      className: classNames.caption,
      style: styles.caption,
    },
  };
}
