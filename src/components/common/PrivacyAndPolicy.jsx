import React from 'react';
import { Mail, Phone, ExternalLink, Shield, Eye, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="p-8 sm:p-12">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-blue-600" size={32} />
              <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
            <p className="text-gray-600">Last updated: July 21, 2025</p>
            <p className="text-gray-700 mt-4">This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Interpretation and Definitions */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interpretation and Definitions</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Interpretation</h3>
              <p className="text-gray-700 mb-6">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. 
                The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Definitions</h3>
              <p className="text-gray-700 mb-4">For the purposes of this Privacy Policy:</p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <dl className="space-y-4">
                  <div>
                    <dt className="font-semibold text-gray-900">Account</dt>
                    <dd className="text-gray-700 mt-1">means a unique account created for You to access our Service or parts of our Service.</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-gray-900">Affiliate</dt>
                    <dd className="text-gray-700 mt-1">means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-gray-900">Company</dt>
                    <dd className="text-gray-700 mt-1">(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Bhumi Technology pvt. ltd, hyderabad, india.</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-gray-900">Cookies</dt>
                    <dd className="text-gray-700 mt-1">are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-gray-900">Country</dt>
                    <dd className="text-gray-700 mt-1">refers to: Telangana, India</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-gray-900">Device</dt>
                    <dd className="text-gray-700 mt-1">means any device that can access the Service such as a computer, a cellphone or a digital tablet.</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-gray-900">Personal Data</dt>
                    <dd className="text-gray-700 mt-1">is any information that relates to an identified or identifiable individual.</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-gray-900">Service</dt>
                    <dd className="text-gray-700 mt-1">refers to the Website.</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-gray-900">Service Provider</dt>
                    <dd className="text-gray-700 mt-1">means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-gray-900">Usage Data</dt>
                    <dd className="text-gray-700 mt-1">refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-gray-900">Website</dt>
                    <dd className="text-gray-700 mt-1">refers to husky media network, accessible from <a href="https://www.huskymedianetwork.com/" className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">https://www.huskymedianetwork.com/ <ExternalLink size={16} /></a></dd>
                  </div>
                  
                  <div>
                    <dt className="font-semibold text-gray-900">You</dt>
                    <dd className="text-gray-700 mt-1">means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</dd>
                  </div>
                </dl>
              </div>
            </section>

            {/* Collecting and Using Your Personal Data */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Collecting and Using Your Personal Data</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Types of Data Collected</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                  <Eye className="text-blue-600" size={20} />
                  Personal Data
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <ul className="space-y-2">
                      <li>• Email address</li>
                      <li>• First name and last name</li>
                      <li>• Phone number</li>
                      <li>• Address, State, Province, ZIP/Postal code, City</li>
                      <li>• Usage Data</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-800 mb-3">Usage Data</h4>
                <div className="space-y-4 text-gray-700">
                  <p>Usage Data is collected automatically when using the Service.</p>
                  <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                  <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                  <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-800 mb-3">Tracking Technologies and Cookies</h4>
                <div className="space-y-4 text-gray-700">
                  <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.</p>
                  <p>The technologies We use may include:</p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-2">
                      <li>• <strong>Cookies or Browser Cookies:</strong> A cookie is a small file placed on Your Device.</li>
                      <li>• <strong>Flash Cookies:</strong> Certain features of our Service may use local stored objects (or Flash Cookies).</li>
                      <li>• <strong>Web Beacons:</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons.</li>
                    </ul>
                  </div>
                  <p>Cookies can be "Persistent" or "Session" Cookies. You have the option to refuse all Cookies or to indicate when a Cookie is being sent.</p>
                </div>
              </div>
            </section>

            {/* Use of Your Personal Data */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use of Your Personal Data</h2>
              <div className="space-y-4 text-gray-700">
                <p>The Company may use Personal Data for the following purposes:</p>
                <div className="bg-green-50 rounded-lg p-6">
                  <ul className="space-y-3">
                    <li><strong>To provide and maintain our Service,</strong> including to monitor the usage of our Service.</li>
                    <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service.</li>
                    <li><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased.</li>
                    <li><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
                    <li><strong>To provide You</strong> with news, special offers and general information about other goods, services and events.</li>
                    <li><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
                    <li><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale.</li>
                    <li><strong>For other purposes:</strong> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Sharing of Your Personal Data */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sharing of Your Personal Data</h2>
              <div className="space-y-4 text-gray-700">
                <p>We may share Your personal information in the following situations:</p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                  <li>• <strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                  <li>• <strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
                  <li>• <strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                  <li>• <strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                  <li>• <strong>With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.</li>
                </ul>
              </div>
            </section>

            {/* Data Retention and Security */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Lock className="text-blue-600" size={24} />
                  Retention of Your Personal Data
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.</p>
                  <p>We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.</p>
                  <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security of Your Personal Data</h2>
                <div className="space-y-4 text-gray-700">
                  <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.</p>
                  <p>While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                </div>
              </section>
            </div>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
              <div className="space-y-4 text-gray-700">
                <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.</p>
                <p>If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
                <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
              </div>
            </section>

            {/* Links to Other Websites */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Links to Other Websites</h2>
              <div className="space-y-4 text-gray-700">
                <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site.</p>
                <p>We strongly advise You to review the Privacy Policy of every site You visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
              </div>
            </section>

            {/* Your Privacy Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Privacy Rights</h2>
              <div className="space-y-4 text-gray-700">
                <p>Depending on Your location, You may have the following rights regarding Your Personal Data:</p>
                <div className="bg-yellow-50 rounded-lg p-6">
                  <ul className="space-y-3">
                    <li><strong>The right to access:</strong> You have the right to request copies of Your personal data.</li>
                    <li><strong>The right to rectification:</strong> You have the right to request that We correct any information You believe is inaccurate.</li>
                    <li><strong>The right to erasure:</strong> You have the right to request that We erase Your personal data, under certain conditions.</li>
                    <li><strong>The right to restrict processing:</strong> You have the right to request that We restrict the processing of Your personal data, under certain conditions.</li>
                    <li><strong>The right to object to processing:</strong> You have the right to object to Our processing of Your personal data, under certain conditions.</li>
                    <li><strong>The right to data portability:</strong> You have the right to request that We transfer the data that We have collected to another organization, or directly to You, under certain conditions.</li>
                  </ul>
                </div>
                <p>If You make a request, We have one month to respond to You. If You would like to exercise any of these rights, please contact Us.</p>
              </div>
            </section>

            {/* International Transfers */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Transfers</h2>
              <div className="space-y-4 text-gray-700">
                <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located.</p>
                <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
                <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy.</p>
              </div>
            </section>

            {/* Changes to this Privacy Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to this Privacy Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
                <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
              </div>
            </section>

            {/* Contact Section */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">If you have any questions about this Privacy Policy, You can contact us:</p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-600" size={20} />
                    <a href="mailto:Official@huskymedianetwork.com" className="text-blue-600 hover:text-blue-800 font-medium">
                      Official@huskymedianetwork.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <ExternalLink className="text-blue-600" size={20} />
                    <a href="https://www.huskymedianetwork.com/contact" className="text-blue-600 hover:text-blue-800 font-medium" target="_blank" rel="noopener noreferrer">
                      Visit our contact page
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-600" size={20} />
                    <a href="tel:+917903624752" className="text-blue-600 hover:text-blue-800 font-medium">
                      +91 7903624752
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}