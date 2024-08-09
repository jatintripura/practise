function Helmet(props: any) {
  document.title = "Maltimart -" + props.title;
  return <div>{props.children}</div>;
}

export default Helmet;
