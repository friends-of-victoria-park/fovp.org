export function InfoSlide({children}, props) {
  return (
    <>
        <div style={{ backgroundImage: `url(${props.imageUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height:1000 }}>
            {children}
        </div>
    </>
  );
};
