interface SectionTitleprops{
    heading:string;
    subHeading:string
}

const Sectiontitle = ({heading,subHeading}:SectionTitleprops) => {
    return (
        <div className="text-center">
            <p className="text-lg font-serif italic text-buttonColor">{subHeading}</p>
            <h1 className="text-3xl uppercase font-bold my-2">{heading}</h1>
        </div>
    );
};

export default Sectiontitle;