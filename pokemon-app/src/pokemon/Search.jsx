export default function Search({ search, setSearch }) {
    return (
        <div>
            <label
                htmlFor="search"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Search by name
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">🔍</span>
                </div>
                <input
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Type your pokemon's name"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 mr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>
    );
}
