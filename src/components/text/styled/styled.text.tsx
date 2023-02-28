import styles from "./styled.text.module.css";

export const StyledText = ({
  text,
  textStyle,
}: {
  text: string;
  textStyle: TextStyles;
}) => {
  if (textStyle == TextStyles.sliced) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.top}>{text}</div>
        <div className={styles.bottom} aria-hidden="true">
          {text}
        </div>
      </div>
    );
  }
  return <h1 className={styles.wavy}>{text}</h1>;
};

export enum TextStyles {
  wavy,
  sliced,
}
