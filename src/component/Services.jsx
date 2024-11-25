import React from "react";

const Services = () => {
     return (
          <section className="bg-[#f3d6c7] py-16 px-8">
               <div className="container mx-auto text-center mb-8">
                    <h2 className="text-3xl font-bold uppercase mb-6">Services</h2>
               </div>

               <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                         <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                              <img src="https://via.placeholder.com/150" alt="Team 1" className="w-full h-full object-cover" />
                         </div>
                         <h3 className="text-xl font-bold uppercase mb-2">Teams</h3>
                         <p className="text-gray-600">Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc aliquet bibendum enim consectetur adipiscing.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                         <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                              <img src="https://via.placeholder.com/150" alt="Team 2" className="w-full h-full object-cover" />
                         </div>
                         <h3 className="text-xl font-bold uppercase mb-2">Teams</h3>
                         <p className="text-gray-600">Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc aliquet bibendum enim consectetur adipiscing.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                         <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                              <img src="https://via.placeholder.com/150" alt="Team 3" className="w-full h-full object-cover" />
                         </div>
                         <h3 className="text-xl font-bold uppercase mb-2">Teams</h3>
                         <p className="text-gray-600">Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc aliquet bibendum enim consectetur adipiscing.</p>
                    </div>
               </div>
          </section>
     );
};

export default Services;
