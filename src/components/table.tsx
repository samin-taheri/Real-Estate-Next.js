import React from 'react'
import InfoSection from './info-section';

const Table = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="text-center">
          <h1 className="sm:text-4xl text-2xl font-semibold pt-10 title-font text-gray-700">
          Comparison of the advantages of obtaining 
          <br className="hidden lg:inline-block"/>residence permit and citizenship by 
          <br className="hidden lg:inline-block"/>purchasing real estate
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
          </div>
        </div>
      <InfoSection>
        
      <div className="lg:w-5/6 w-full mx-auto overflow-auto mb-10">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-md bg-gray-100 rounded-tl rounded-bl"></th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100">Residence Permit</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100">Citizenship</th>
            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-md bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3">Terms and conditions for buying real estate</td>
            <td className="px-4 py-3">From $75,000</td>
            <td className="px-4 py-3">From $400,000</td>
            <td className="w-10 text-center">
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3">Validity period</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">Up to 2 years</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">Indefinitely</td>
            <td className="border-t-2 border-gray-200 w-10 text-center">
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3">Time to receive</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">1-2 months</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">3-6 months</td>
            <td className="border-t-2 border-gray-200 w-10 text-center">
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Getting for family members</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Spouse and children under 18</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Spouse and children under 21</td>
            <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Travelling without a visa</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">No</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">More than 110 countries</td>
            <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Employment</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">No</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 ">Yes</td>
            <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
      </InfoSection>
    </section>
  );
}

export default Table;