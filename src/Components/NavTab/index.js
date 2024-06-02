const NavTab = ({tabsList, category, changeTab}) => (
  <ul className="text-white flex gap-4 w-fit mx-auto my-4">
    {tabsList.map(each => (
      <li key={each.tabId}>
        <button
          type="button"
          className={`${
            category === each.tabId
              ? 'border-b-2 border-b-[#fec653] text-[#fec653]'
              : ''
          } py-2 p-3 text-md md:text-xl font-bold`}
          onClick={() => {
            changeTab(each.tabId)
          }}
        >
          {each.displayText}
        </button>
      </li>
    ))}
  </ul>
)

export default NavTab
