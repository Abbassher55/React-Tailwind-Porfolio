export default function PreMadeComponents() {
  return (
    <>
      // Toggler Code Start
      <div className="toggler">
        <label className="relative inline-block h-6" for="dark_mode">
          <span className="dark-label dark:text-custom-purple font-inter mr-3 font-bold text-custom-gray">Dark Mode</span>
          <input id="dark_mode" type="checkbox" />
        </label>
      </div>
      // Toggler Code End
    </>
  );
}
