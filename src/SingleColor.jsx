import { toast } from "react-toastify";
const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const handleOnClick = async (value) => {
   try {
      await navigator.clipboard.writeText(value);
      toast.success("Text copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy text:");
    }
  };
  return (
    <article
      onClick={() => handleOnClick(`#${hex}`)}
      className={index > 10 ? "color color-light" : "color"}
      style={{
        background: `#${hex}`,
      }}
    >
      <p className="percent-value">{weight} %</p>
      <p className="color-value"> #${hex}</p>
    </article>
  );
};

export default SingleColor;
