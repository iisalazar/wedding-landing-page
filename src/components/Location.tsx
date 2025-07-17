import React from 'react';
import {MapPin, Phone, Globe} from 'lucide-react';

const Location = () => {
    return (
        <section id="location" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
                        Location
                    </h2>
                    <p className="text-xl text-gray-600">
                        Join us at our beautiful venue
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                                Señorito Nature Resort
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-gray-600 mr-3 mt-1"/>
                                    <div>
                                        <p className="text-gray-800 font-medium">Address</p>
                                        <p className="text-gray-600">Señorito Nature Resort<br/>Brgy. Masaya, Bay,
                                            Laguna</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                                    Parking & Directions
                                </h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Free parking available on-site</li>
                                </ul>
                            </div>

                            <div className="mt-6">
                                <a
                                    href="https://maps.app.goo.gl/Sx6i889uDJMSaBWr7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                                >
                                    <MapPin className="w-5 h-5 mr-2"/>
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="h-96 lg:h-auto">
                        <div className="w-full h-full bg-gray-200 rounded-2xl shadow-lg overflow-hidden">
                            {/*<iframe*/}
                            {/*  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.8234567890123!2d121.2345678!3d14.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zU2XDsW9yaXRvIE5hdHVyZSBSZXNvcnQsIEJyZ3kuIE1hc2F5YSwgQmF5LCBMYWd1bmE%3D!5e0!3m2!1sen!2sph!4v1625151234567!5m2!1sen!2sph"*/}
                            {/*  width="100%"*/}
                            {/*  height="100%"*/}
                            {/*  style={{ border: 0 }}*/}
                            {/*  allowFullScreen*/}
                            {/*  loading="lazy"*/}
                            {/*  referrerPolicy="no-referrer-when-downgrade"*/}
                            {/*  title="Wedding Venue Location - Señorito Nature Resort"*/}
                            {/*/>*/}
                            <iframe id="map-canvas" className="map_part" width="100%" height="450" frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0" marginWidth="0"
                                    src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Señorito Nature Resort&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">

                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;