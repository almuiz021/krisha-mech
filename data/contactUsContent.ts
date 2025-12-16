import { QRCodeImg } from '@/assets/AssetsExport';

export const contactUsContent = {
  id: 'contactus',
  heading: 'Get In Touch',
  paragraph:
    'Reach out to us for quotes, technical consultations, or support. Our team is ready to help with machine selection, customization, and after-sales service.',
  qrImage: QRCodeImg, // logo used inside QR component
  // Google map embed URL (public embed)
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7784.754476431376!2d77.81561733947518!3d12.688783317255387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7b003e09a78b%3A0x8265ed6f22841993!2sKrisha%20Mechatronics%20-%20Experience%20Centre!5e0!3m2!1sen!2sin!4v1765880418042!5m2!1sen!2sin',

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
