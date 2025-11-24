import GetMovies from "../api_calls/popularMovies"

export default function Tabs({ activeTab, onTabChange }) {
    const tabs = ['Popular', 'Top Rated', 'Upcoming', 'Favorites']
    //Debug
    console.log('Current Tab(Tabs): ',activeTab)

    return < div className="tabs" >
        {
            tabs.map(tab => (
                <button
                    key = {tab}
                    onClick={() => onTabChange(tab)}
                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                >
                    {tab}
                </button>
            ))
        }
    </div >
}