import React, { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen mt-22 lg:p-5">
      <h1 className="font-semibold text-[var(--purple-foreground)] text-4xl text-center max-w-2xl mx-auto md:text-5xl">
        Terms & condition
      </h1>
      <p className="text-center text-sm mt-2 !font-mono font-bold">
        Effective Date: March 16, 2025
      </p>
      <div className="my-5 px-2 md:px-5">
        <div className="mb-5">
          <h3 className="text-3xl">Introduction</h3>
          <p className="my-4 text-sm text-gray-400">
            The following Terms and Conditions govern your access to and use of
            ROHUM's AI avatar platform, available at rohum.tech. By accessing
            our website or using our services, you acknowledge that you have
            read, understood, and agree to be bound by these Terms and
            Conditions. If you do not agree with any part of these terms, you
            must not use our services.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-2xl">2. Privacy Statement</h3>
          <p className="my-4 text-sm text-gray-400">
            We are committed to protecting your privacy. Authorized employees
            within ROHUM only use information collected from individual
            customers on a need-to-know basis. We constantly review our systems
            and data to ensure the best possible service to our customers. We
            take particular care in protecting data related to your AI avatars,
            including likeness, voice, and other personalized elements.
          </p>
          <p className="my-4 text-sm text-gray-400">
            Specific offenses for unauthorized actions against computer systems
            and data exist. We will investigate any such actions with a view to
            prosecuting and/or taking civil proceedings to recover damages
            against those responsible.
          </p>
          <p className="my-4 text-sm text-gray-400">
            For complete details on how we handle your personal information,
            please refer to our separate Privacy Policy.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-2xl">1. General Terms</h3>
          <p className="my-4 text-sm text-gray-400">
            By using ROHUM's API, software, tools, data, documentation, or
            website (collectively referred to as the "Services"), you
            acknowledge that you have carefully read and agree to be legally
            bound by these Terms of Service and all applicable laws and
            regulations. Additionally, you confirm that you are at least 18
            years old and have the legal capacity to enter into a binding
            agreement.
          </p>
          <p className="my-4 text-sm text-gray-400">
            The following terminology applies throughout this document:
            "Client," "You," and "Your" refer to you, the person accessing
            rohum.tech and accepting these terms and conditions. "The Company,"
            "Ourselves," "We," and "Us" refer to ROHUM. "Party," "Parties," or
            "Us" refers to both the Client and ourselves, or either the Client
            or ourselves.
          </p>
          <p className="my-4 text-sm text-gray-400">
            All terms refer to the offer, acceptance, and consideration of
            payment necessary to undertake the process of providing you with our
            AI avatar services as described by ROHUM, in accordance with and
            subject to prevailing laws applicable to our operations.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-2xl">3. Use License</h3>
          <p className="my-4 text-sm text-gray-400">
            Permission is granted to create and use AI avatars through the ROHUM
            platform for personal or authorized commercial use only. This is the
            grant of a license, not a transfer of title, and under this license,
            you may not:
          </p>
          <ul className="list-disc pl-5 my-4 text-sm text-gray-400">
            <li>
              Attempt to decompile or reverse engineer any software or AI models
              contained on ROHUM's platform
            </li>
            <li>
              Create avatars that impersonate real individuals without their
              express consent
            </li>
            <li>Use avatars for illegal, harmful, or misleading purposes</li>
            <li>
              Remove any copyright or other proprietary notations from the
              materials
            </li>
            <li>
              Transfer or sublicense avatar rights to unauthorized parties
            </li>
          </ul>
          <p className="my-4 text-sm text-gray-400">
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by ROHUM at any time. Upon
            terminating your access to these services or upon the termination of
            this license, you must cease use of all created avatars and destroy
            any downloaded materials in your possession, whether in electronic
            or printed format.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-2xl">4. Data Usage and Protection</h3>
          <p className="my-4 text-sm text-gray-400">
            Your avatar data is treated with the utmost confidentiality.
            Information concerning the Client and their respective client
            records, including avatar designs and interactions, may be passed to
            third parties only as explicitly stated in our Privacy Policy.
            Client records are regarded as confidential and therefore will not
            be divulged to any third party, other than our employees and, if
            legally required to do so, to the appropriate authorities.
          </p>
          <p className="my-4 text-sm text-gray-400">
            Clients have the right to request sight of, and copies of any and
            all Client Records we keep, on the provision that we are given
            reasonable notice of such a request. We will not sell, share, or
            rent your personal information to any third party or use your email
            address for unsolicited mail.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-2xl">5. Payment Terms</h3>
          <p className="my-4 text-sm text-gray-400">
            If you wish to purchase any product or service made available
            through ROHUM ("Payment"), including AI avatar creation or
            subscription services, you may be asked to supply certain
            information relevant to your Payment including, without limitation,
            your credit card number, the expiration date of your credit card,
            and your billing address.
          </p>
          <p className="my-4 text-sm text-gray-400">
            You represent and warrant that:
          </p>
          <ul className="my-4 text-sm text-gray-400 list-disc pl-5">
            <li>
              You have the legal right to use any credit card(s) or other
              payment method(s) in connection with any Payment.
            </li>
            <li>
              The information you supply to us is true, correct, and complete.
            </li>
          </ul>
          <p className="my-4 text-sm text-gray-400">
            We may employ the use of third-party services for the purpose of
            facilitating payment and the completion of Purchases. By submitting
            your information, you grant us the right to provide the information
            to these third parties subject to our Privacy Policy.
          </p>
          <p className="my-4 text-sm text-gray-400">
            All prices displayed by ROHUM are denominated in applicable currency
            as indicated on our website. We reserve the right to refuse or
            cancel your order if fraud or an unauthorized or illegal transaction
            is suspected.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-2xl">6. Refund Policy</h3>
          <p className="my-4 text-sm text-gray-400">
            If you make any payment to ROHUM as a Client, you are entitled to
            request a refund within three (3) days from the date of purchase,
            without providing any reason, provided that the credits allocated to
            your payment have not been consumed.
          </p>
          <p className="my-4 text-sm text-gray-400">
            For custom avatar creation services, refunds may be limited once the
            design process has begun, as detailed in the specific service
            agreement.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-2xl">7. Limitations of Liability</h3>
          <p className="my-4 text-sm text-gray-400">
            The information on rohum.tech and the AI avatar services provided
            are offered on an "as is" basis. To the fullest extent permitted by
            law, ROHUM:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-400">
            <li>
              Disclaims all representations and warranties related to this
              website and its contents, including AI avatars, or which may be
              provided by any affiliates or other third parties, including any
              inaccuracies or omissions.
            </li>
            <li>
              Disclaims all liability for damages arising from or in connection
              with your use of this website or AI avatars. This includes, but is
              not limited to, direct loss, loss of business or profits, damage
              to your computer, software, systems, and programs, and any other
              direct or indirect, consequential, and incidental damages.
            </li>
          </ul>
          <p className="my-4 text-sm text-gray-400">
            Furthermore, ROHUM does not warrant or make any representations
            regarding the accuracy, likely results, or reliability of the use of
            the materials, including AI avatars, on its platform or any linked
            sites.
          </p>
          <p className="my-4 text-sm text-gray-400">
            However, ROHUM does not exclude liability for death or personal
            injury caused by its negligence. The above exclusions and
            limitations apply only to the extent permitted by law. None of your
            statutory consumer rights are affected.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-2xl">8. Account Creation and Management</h3>
          <p className="my-4 text-sm text-gray-400">
            To use the Services, including creating and managing AI avatars, you
            may need to provide information about yourself, including your name,
            email address, username, and password. You agree that any
            registration information you provide to ROHUM will always be
            accurate, correct, and up to date.
          </p>
          <p className="my-4 text-sm text-gray-400">
            You must not impersonate someone else or provide account information
            or an email address other than your own. Your account must not be
            used for any illegal or unauthorized purpose, including but not
            limited to creating avatars that violate the rights of others. You
            must not, in the use of the Services, violate any laws in your
            jurisdiction.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-2xl">9. Product Description</h3>
          <p className="my-4 text-sm text-gray-400">
            We strive to describe and display the website and AI avatar Services
            as accurately as possible. While we try to be clear in explaining
            the Services, we do not guarantee that the website or avatars are
            entirely accurate, current, or error-free. AI avatars may vary in
            appearance, functionality, and performance based on technological
            limitations, input data quality, and platform constraints.
          </p>
          <p className="my-4 text-sm text-gray-400">
            From time to time, we may correct errors in pricing and descriptions
            or make improvements to our avatar technology. We reserve the right
            to refuse or cancel any orders based on incorrect pricing or
            technical limitations.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-2xl">10.1 ROHUM's Intellectual Property</h3>
          <p className="my-4 text-sm text-gray-400">
            The Services available through rohum.tech contain intellectual
            property owned by ROHUM and/or our representatives, including but
            not limited to:
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-400">
            <li>
              Trademarks and service marks associated with the ROHUM brand
            </li>
            <li>Copyrighted content, interfaces, and design elements</li>
            <li>Proprietary AI models, algorithms, and technologies</li>
            <li>Avatar designs, templates, and customization tools</li>
            <li>
              The ROHUM name, logo, all designs, text, graphics, and their
              arrangement
            </li>
          </ul>
          <p className="my-4 text-sm text-gray-400">
            The entire contents of the Services are protected by intellectual
            property law, including international copyright and trademark laws.
            This protection extends to AI models, backend systems, and user
            interfaces on our platform.
          </p>
        </div>

        <div className="mb-5">
          <h3 className="text-2xl">10.2 User-Generated Content and Licenses</h3>
          <p className="my-4 text-sm text-gray-400">
            While you retain rights to your original content used to create AI
            avatars, you grant ROHUM a non-exclusive, worldwide, royalty-free
            license to use such content solely for:
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-400">
            <li>Creating and rendering your requested AI avatars</li>
            <li>Improving our AI systems through anonymized training</li>
            <li>Providing the requested services within our platform</li>
            <li>Technical purposes such as backups and maintenance</li>
          </ul>
          <p className="my-4 text-sm text-gray-400">
            This license does not transfer ownership of your original content to
            ROHUM. We reserve the right to remove you from the Services without
            refund if you violate this policy.
          </p>
        </div>

        <div className="mb-5">
          <h3 className="text-2xl">11. Technical Aspects</h3>
          <h4 className="text-xl mt-4">11.1 Log Files and Data Collection</h4>
          <p className="my-4 text-sm text-gray-400">
            We use IP addresses to analyze trends, administer the site, track
            user movement, and gather demographic data. IP addresses are not
            linked to personally identifiable information.
          </p>
          <p className="my-4 text-sm text-gray-400">
            We may also track avatar interactions and usage patterns to improve
            our services. This data is not shared with third parties and is only
            used within ROHUM as necessary.
          </p>

          <h4 className="text-xl mt-4">11.2 Cookies</h4>
          <p className="my-4 text-sm text-gray-400">
            Like most interactive websites, ROHUM uses cookies to store user
            details. Cookies enhance functionality and ease of use. Some
            affiliate partners may also use cookies.
          </p>
          <p className="my-4 text-sm text-gray-400">
            You may disable cookies via your browser settings, but this may
            limit your access to certain platform features.
          </p>
        </div>

        <div className="mb-5">
          <h3 className="text-2xl">12. Website Links Policy</h3>
          <h4 className="text-xl mt-4">12.1 Links to ROHUM Website</h4>
          <p className="my-4 text-sm text-gray-400">
            You may not create a link to any page of rohum.tech without our
            prior written consent. If permitted, you do so at your own risk.
          </p>
          <p className="my-4 text-sm text-gray-400">
            Links must not misrepresent any relationship with ROHUM or suggest
            endorsement by our company.
          </p>

          <h4 className="text-xl mt-4">12.2 Links from ROHUM Website</h4>
          <p className="my-4 text-sm text-gray-400">
            ROHUM does not monitor or review third-party websites linked from
            rohum.tech. Opinions or material on such sites are not necessarily
            endorsed by us.
          </p>
          <p className="my-4 text-sm text-gray-400">
            We encourage users to read third-party privacy policies before
            disclosing personal information. ROHUM is not responsible for any
            loss or damage resulting from third-party interactions.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-2xl">13. Liability and User Responsibility</h3>
          <p className="my-4 text-sm text-gray-400">
            As a user of ROHUM's AI avatar platform, you acknowledge your
            responsibility to use our services in accordance with these terms
            and applicable laws.
          </p>
          <p className="my-4 text-sm text-gray-400">
            You agree to protect and defend ROHUM from claims, liabilities, or
            expenses arising from:
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-400">
            <li>Violation of these terms of service</li>
            <li>Unauthorized or inappropriate use of AI avatars</li>
            <li>Intellectual property or privacy infringement</li>
            <li>Content uploaded, created, or distributed via our platform</li>
            <li>Misrepresentation of avatar identity or capabilities</li>
          </ul>
          <p className="my-4 text-sm text-gray-400">
            ROHUM reserves the right to assume control over any indemnified
            matter, and you agree not to settle such claims without our written
            approval.
          </p>
        </div>

        <div className="mb-5">
          <h3 className="text-2xl">
            14. Service Interruptions and External Events
          </h3>
          <h4 className="text-xl mt-4">14.1 Service Resilience Policy</h4>
          <p className="my-4 text-sm text-gray-400">
            ROHUM is not liable for service interruptions due to unforeseeable
            circumstances beyond reasonable control.
          </p>

          <h4 className="text-xl mt-4">14.2 Qualifying Circumstances</h4>
          <ul className="list-disc pl-5 text-sm text-gray-400">
            <li>Natural disasters and severe weather</li>
            <li>Public health emergencies</li>
            <li>Cyber attacks or infrastructure failures</li>
            <li>Government regulations or restrictions</li>
            <li>
              Civil disturbances, labor disputes, or supply chain disruptions
            </li>
            <li>Technical failures from third-party providers</li>
          </ul>

          <h4 className="text-xl mt-4">14.3 Communication Protocol</h4>
          <p className="my-4 text-sm text-gray-400">
            In the event of service disruption, ROHUM will:
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-400">
            <li>Notify users within 48 hours</li>
            <li>Provide regular updates on restoration efforts</li>
            <li>Document the nature and impact of the disruption</li>
          </ul>

          <h4 className="text-xl mt-4">14.4 Mutual Obligations</h4>
          <p className="my-4 text-sm text-gray-400">
            Both parties agree to maintain communication, implement workarounds
            where possible, and resume operations promptly when feasible.
          </p>
        </div>

        <div className="mb-5">
          <h3 className="text-2xl">
            15. Data Security During Exceptional Circumstances
          </h3>
          <p className="my-4 text-sm text-gray-400">
            ROHUM prioritizes data security even during service disruptions by
            enforcing enhanced protection measures.
          </p>
          <p className="my-4 text-sm text-gray-400">
            While response times may be affected, users will be informed of any
            necessary security modifications as soon as possible.
          </p>
        </div>

        <div className="mb-5">
          <h3 className="text-2xl">16. Modifications to Terms</h3>
          <p className="my-4 text-sm text-gray-400">
            ROHUM reserves the right to modify these Terms at any time. Notice
            of significant changes will be provided via our website or email.
            Continued use of the services constitutes acceptance of updated
            terms.
          </p>
        </div>

        <div className="mb-5">
          <h3 className="text-2xl">17. Governing Law and Jurisdiction</h3>
          <p className="my-4 text-sm text-gray-400">
            These Terms shall be governed by and construed in accordance with
            the laws of Turkey. Any disputes shall be subject to the exclusive
            jurisdiction of the courts in Ankara, Turkey.
          </p>
        </div>

        <div className="mb-5">
          <h3 className="text-2xl">18. Severability</h3>
          <p className="my-4 text-sm text-gray-400">
            If any provision of these Terms is found invalid or unenforceable,
            it shall be replaced with a valid provision that best reflects the
            original intent, while the remaining provisions shall continue in
            full force.
          </p>
        </div>

        <div className="mb-5">
          <h3 className="text-2xl">19. Waiver</h3>
          <p className="my-4 text-sm text-gray-400">
            Failure by ROHUM to enforce any right or provision in these Terms
            does not constitute a waiver. No waiver of any breach shall be
            considered a waiver of any other or future breach.
          </p>
        </div>
        <div>
          <h3 className="text-2xl">20. Contact Information</h3>
          <p className="my-4 text-sm text-gray-400">
            If you have any questions about these Terms and Conditions, please
            contact us at:
          </p>
          <div className="text-sm text-gray-400">
            <p>
              <strong>ROHUM</strong>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:legal@rohum.tech" className="text-blue-500">
                legal@rohum.tech
              </a>
            </p>
            <p>Address: Ankara, Turkey</p>
            <p>
              Website:{" "}
              <a
                href="https://rohum.tech"
                target="_blank"
                className="text-blue-500"
              >
                https://rohum.tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
