import { KrishaLogo, QRCodeImg } from '@/assets/AssetsExport';

export const contactUsContent = {
  id: 'contactus',
  heading: 'Get In Touch',
  paragraph:
    'Reach out to us for quotes, technical consultations, or support. Our team is ready to help with machine selection, customization, and after-sales service.',
  qrImage: QRCodeImg, // logo used inside QR component
  // Google map embed URL (public embed)
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.489925894355!2d77.66476399999999!3d13.004443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11000bd7ce35%3A0x5258ef9539b760df!2sBLUE%20BELLS%20PG%20FOR%20GENTS!5e0!3m2!1sen!2sin!4v1765276115691!5m2!1sen!2sin',
  contact: {
    phone: '+91 93423 36169',
    email: 'bfwmarketing@bfw.co.in',
    addressLines: [
      'Krisha Mech Pvt. Ltd.',
      'Industrial Area, Bangalore',
      'Karnataka, India',
    ],
  },
};

export default contactUsContent;
