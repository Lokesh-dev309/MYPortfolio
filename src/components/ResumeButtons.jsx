const ResumeButtons = () => {
  return (
    <div
      className="
        flex gap-4 items-center absolute bottom-14 left-15
        max-md:-bottom-8 max-md:left-1/2 max-md:-translate-x-1/2
        max-md:gap-2
      "
    >
      {/* View Resume */}
      <a
        href="https://docs.google.com/document/d/1gcgepnRnWSHwKAD44AaUX4lJB4KZ5wp-/edit?usp=sharing&ouid=116940222799172684624&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Resume"
        className="
          flex items-center gap-3 pl-2 pr-5 py-2
          rounded-full bg-white border border-gray-200 shadow-md
          hover:shadow-xl hover:-translate-y-1 transition-all duration-300

          max-md:gap-2 max-md:pl-1.5 max-md:pr-3 max-md:py-1.5
        "
      >
        <div
          className="
            w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg
            max-md:w-8 max-md:h-8 max-md:text-sm
          "
        >
          👁
        </div>

        <span className="font-medium text-gray-800 max-md:text-sm">
          View Resume
        </span>
      </a>

      {/* Download Resume */}
      <a
        href="/resume.pdf"
        download
        aria-label="Download Resume"
        className="
          flex items-center gap-3 pl-2 pr-5 py-2
          rounded-full bg-black text-white shadow-md
          hover:shadow-xl hover:-translate-y-1 transition-all duration-300

          max-md:gap-2 max-md:pl-1.5 max-md:pr-3 max-md:py-1.5
        "
      >
        <div
          className="
            w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-lg
            max-md:w-8 max-md:h-8 max-md:text-sm
          "
        >
          ⬇
        </div>

        <span className="font-medium max-md:text-sm">
          Download CV
        </span>
      </a>
    </div>
  );
};

export default ResumeButtons;