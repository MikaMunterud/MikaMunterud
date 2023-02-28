export default function IconLink({
  icon,
  link,
  className,
  dataHover,
  linkText,
}) {
  if (icon && link && className && dataHover) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={linkText}
        className={className}
        data-hover={dataHover}
      >
        {icon}
      </a>
    );
  }

  if (icon && link && className) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={linkText}
        className={className}
      >
        {icon}
      </a>
    );
  }

  return (
    <a href={link} target="_blank" aria-label={linkText} rel="noreferrer">
      {icon}
    </a>
  );
}
