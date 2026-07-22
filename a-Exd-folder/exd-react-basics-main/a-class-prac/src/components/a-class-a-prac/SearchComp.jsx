import React from 'react'

const SearchComp = ({searchItem, setSearchItem}) => {
  return (
     <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12 pb-5">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchItem}
                  className="w-50 p-2"
                  onChange={(e) => setSearchItem(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-primary text-white p-2"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* input for search */}
      </div>
  )
}

export default SearchComp
