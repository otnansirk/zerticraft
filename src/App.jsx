import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Upload,
  Users,
  Type,
  Image as ImageIcon,
  Download,
  ChevronLeft,
  ChevronRight,
  Trash2,
  Move,
  Maximize,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlertCircle,
  FileText,
  Plus,
  Loader2,
  Mail,
  Send,
  Globe,
  Key,
  Info,
  X,
  ChevronDown,
  Search,
  Type as TypeIcon
} from 'lucide-react';

// Helper for unique IDs
const generateId = () => Math.random().toString(36).substr(2, 9);

// Comprehensive list of 110+ Google Fonts
const GOOGLE_FONTS = [
  { name: 'Roboto', family: "'Roboto', sans-serif" },
  { name: 'Open Sans', family: "'Open Sans', sans-serif" },
  { name: 'Montserrat', family: "'Montserrat', sans-serif" },
  { name: 'Lato', family: "'Lato', sans-serif" },
  { name: 'Poppins', family: "'Poppins', sans-serif" },
  { name: 'Inter', family: "'Inter', sans-serif" },
  { name: 'Oswald', family: "'Oswald', sans-serif" },
  { name: 'Raleway', family: "'Raleway', sans-serif" },
  { name: 'Nunito', family: "'Nunito', sans-serif" },
  { name: 'Ubuntu', family: "'Ubuntu', sans-serif" },
  { name: 'Merriweather Sans', family: "'Merriweather Sans', sans-serif" },
  { name: 'Rubik', family: "'Rubik', sans-serif" },
  { name: 'Work Sans', family: "'Work Sans', sans-serif" },
  { name: 'Quicksand', family: "'Quicksand', sans-serif" },
  { name: 'Fira Sans', family: "'Fira Sans', sans-serif" },
  { name: 'Nanum Gothic', family: "'Nanum Gothic', sans-serif" },
  { name: 'Karla', family: "'Karla', sans-serif" },
  { name: 'Arimo', family: "'Arimo', sans-serif" },
  { name: 'Titillium Web', family: "'Titillium Web', sans-serif" },
  { name: 'PT Sans', family: "'PT Sans', sans-serif" },
  { name: 'Josefin Sans', family: "'Josefin Sans', sans-serif" },
  { name: 'Libre Franklin', family: "'Libre Franklin', sans-serif" },
  { name: 'Muli', family: "'Muli', sans-serif" },
  { name: 'Assistant', family: "'Assistant', sans-serif" },
  { name: 'Hind', family: "'Hind', sans-serif" },
  { name: 'Heebo', family: "'Heebo', sans-serif" },
  { name: 'Dosis', family: "'Dosis', sans-serif" },
  { name: 'DM Sans', family: "'DM Sans', sans-serif" },
  { name: 'Manrope', family: "'Manrope', sans-serif" },
  { name: 'Jost', family: "'Jost', sans-serif" },
  { name: 'Maven Pro', family: "'Maven Pro', sans-serif" },
  { name: 'Outfit', family: "'Outfit', sans-serif" },
  { name: 'Sora', family: "'Sora', sans-serif" },
  { name: 'Lexend', family: "'Lexend', sans-serif" },
  { name: 'Merriweather', family: "'Merriweather', serif" },
  { name: 'Lora', family: "'Lora', serif" },
  { name: 'PT Serif', family: "'PT Serif', serif" },
  { name: 'Libre Baskerville', family: "'Libre Baskerville', serif" },
  { name: 'EB Garamond', family: "'EB Garamond', serif" },
  { name: 'Crimson Text', family: "'Crimson Text', serif" },
  { name: 'Noto Serif', family: "'Noto Serif', serif" },
  { name: 'Playfair Display', family: "'Playfair Display', serif" },
  { name: 'Cinzel', family: "'Cinzel', serif" },
  { name: 'Bitter', family: "'Bitter', serif" },
  { name: 'Arvo', family: "'Arvo', serif" },
  { name: 'Bree Serif', family: "'Bree Serif', serif" },
  { name: 'Cormorant Garamond', family: "'Cormorant Garamond', serif" },
  { name: 'Spectral', family: "'Spectral', serif" },
  { name: 'Domine', family: "'Domine', serif" },
  { name: 'Old Standard TT', family: "'Old Standard TT', serif" },
  { name: 'Cardo', family: "'Cardo', serif" },
  { name: 'Vollkorn', family: "'Vollkorn', serif" },
  { name: 'Zilla Slab', family: "'Zilla Slab', serif" },
  { name: 'Tinos', family: "'Tinos', serif" },
  { name: 'Faustina', family: "'Faustina', serif" },
  { name: 'Literata', family: "'Literata', serif" },
  { name: 'Sorts Mill Goudy', family: "'Sorts Mill Goudy', serif" },
  { name: 'Ultra', family: "'Ultra', serif" },
  { name: 'Bodoni Moda', family: "'Bodoni Moda', serif" },
  { name: 'Dancing Script', family: "'Dancing Script', cursive" },
  { name: 'Great Vibes', family: "'Great Vibes', cursive" },
  { name: 'Pacifico', family: "'Pacifico', cursive" },
  { name: 'Caveat', family: "'Caveat', cursive" },
  { name: 'Satisfy', family: "'Satisfy', cursive" },
  { name: 'Lobster', family: "'Lobster', cursive" },
  { name: 'Shadows Into Light', family: "'Shadows Into Light', cursive" },
  { name: 'Indie Flower', family: "'Indie Flower', cursive" },
  { name: 'Sacramento', family: "'Sacramento', cursive" },
  { name: 'Cookie', family: "'Cookie', cursive" },
  { name: 'Courgette', family: "'Courgette', cursive" },
  { name: 'Kaushan Script', family: "'Kaushan Script', cursive" },
  { name: 'Yellowtail', family: "'Yellowtail', cursive" },
  { name: 'Homemade Apple', family: "'Homemade Apple', cursive" },
  { name: 'Pinyon Script', family: "'Pinyon Script', cursive" },
  { name: 'Alex Brush', family: "'Alex Brush', cursive" },
  { name: 'Allura', family: "'Allura', cursive" },
  { name: 'Arizonia', family: "'Arizonia', cursive" },
  { name: 'Parisienne', family: "'Parisienne', cursive" },
  { name: 'Grand Hotel', family: "'Grand Hotel', cursive" },
  { name: 'WindSong', family: "'WindSong', cursive" },
  { name: 'Meie Script', family: "'Meie Script', cursive" },
  { name: 'Mr De Haviland', family: "'Mr De Haviland', cursive" },
  { name: 'Mrs Saint Delafield', family: "'Mrs Saint Delafield', cursive" },
  { name: 'Petit Formal Script', family: "'Petit Formal Script', cursive" },
  { name: 'Lavishly Yours', family: "'Lavishly Yours', cursive" },
  { name: 'Love Light', family: "'Love Light', cursive" },
  { name: 'Lovers Quarrel', family: "'Lovers Quarrel', cursive" },
  { name: 'La Belle Aurore', family: "'La Belle Aurore', cursive" },
  { name: 'Love Ya Like A Sister', family: "'Love Ya Like A Sister', cursive" },
  { name: 'Loved by the King', family: "'Loved by the King', cursive" },
  { name: 'Lakki Reddy', family: "'Lakki Reddy', cursive" },
  { name: 'Lalezar', family: "'Lalezar', cursive" },
  { name: 'Lateef', family: "'Lateef', serif" },
  { name: 'Lemonada', family: "'Lemonada', cursive" },
  { name: 'Bebas Neue', family: "'Bebas Neue', sans-serif" },
  { name: 'Anton', family: "'Anton', sans-serif" },
  { name: 'Abril Fatface', family: "'Abril Fatface', serif" },
  { name: 'Righteous', family: "'Righteous', cursive" },
  { name: 'Fredoka One', family: "'Fredoka One', cursive" },
  { name: 'Luckiest Guy', family: "'Luckiest Guy', cursive" },
  { name: 'Permanent Marker', family: "'Permanent Marker', cursive" },
  { name: 'Press Start 2P', family: "'Press Start 2P', cursive" },
  { name: 'Bungee', family: "'Bungee', cursive" },
  { name: 'Orbitron', family: "'Orbitron', sans-serif" },
  { name: 'Special Elite', family: "'Special Elite', cursive" },
  { name: 'Monoton', family: "'Monoton', cursive" },
  { name: 'Comfortaa', family: "'Comfortaa', cursive" },
  { name: 'Amatic SC', family: "'Amatic SC', cursive" },
  { name: 'Bangers', family: "'Bangers', cursive" },
  { name: 'Creepster', family: "'Creepster', cursive" },
  { name: 'Yeseva One', family: "'Yeseva One', serif" },
  { name: 'Alumni Sans', family: "'Alumni Sans', sans-serif" },
  { name: 'Syncopate', family: "'Syncopate', sans-serif" },
  { name: 'UnifrakturMaguntia', family: "'UnifrakturMaguntia', cursive" },
  { name: 'Fira Code', family: "'Fira Code', monospace" },
  { name: 'Source Code Pro', family: "'Source Code Pro', monospace" },
  { name: 'Inconsolata', family: "'Inconsolata', monospace" },
  { name: 'JetBrains Mono', family: "'JetBrains Mono', monospace" },
  { name: 'Roboto Mono', family: "'Roboto Mono', monospace" },
  { name: 'Space Mono', family: "'Space Mono', monospace" },
  { name: 'Courier Prime', family: "'Courier Prime', monospace" },
  { name: 'Ubuntu Mono', family: "'Ubuntu Mono', monospace" },
  { name: 'VT323', family: "'VT323', monospace" },
  { name: 'Share Tech Mono', family: "'Share Tech Mono', monospace" },
].sort((a, b) => a.name.localeCompare(b.name));

const App = () => {
  // --- Library Loading State ---
  const [libsLoaded, setLibsLoaded] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('design'); // 'design' or 'email'
  const [fontPickerOpen, setFontPickerOpen] = useState(false);
  const [fontSearch, setFontSearch] = useState('');

  // --- State Management ---
  const [eventName, setEventName] = useState('');
  const [baseTemplate, setBaseTemplate] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [additionalTexts, setAdditionalTexts] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [participantInput, setParticipantInput] = useState('');
  const [activeParticipantIndex, setActiveParticipantIndex] = useState(0);
  const [selectedElementId, setSelectedElementId] = useState('participant-name'); // 'participant-name' or Text Asset ID

  // Email Configuration State (Custom API Support)
  const [emailConfig, setEmailConfig] = useState(() => {
    const saved = localStorage.getItem('certifygen_email_api_config_v2');
    return saved ? JSON.parse(saved) : {
      apiUrl: '',
      headers: [{ id: generateId(), key: 'Authorization', value: '' }],
      subject: 'Certificate for {name} - {event}',
      body: 'Hi {name},\n\nPlease find your certificate for {event} attached.\n\nBest regards.',
    };
  });

  const [isSending, setIsSending] = useState(false);

  // Participant Name Settings (Base Typography)
  const [nameSettings, setNameSettings] = useState({
    x: 50,
    y: 50,
    fontSize: 40,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: "'Roboto', sans-serif"
  });

  // Interaction State
  const [draggingId, setDraggingId] = useState(null);
  const [resizingId, setResizingId] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Helper to find selected element settings
  const getSelectedElementSettings = () => {
    if (selectedElementId === 'participant-name') return nameSettings;
    return additionalTexts.find(t => t.id === selectedElementId);
  };

  // Helper to update selected element settings
  const updateSelectedElementSettings = (newSettings) => {
    if (selectedElementId === 'participant-name') {
      setNameSettings(prev => ({ ...prev, ...newSettings }));
    } else {
      setAdditionalTexts(prev => prev.map(t =>
        t.id === selectedElementId ? { ...t, ...newSettings } : t
      ));
    }
  };

  // Persist Email Config
  useEffect(() => {
    localStorage.setItem('certifygen_email_api_config_v2', JSON.stringify(emailConfig));
  }, [emailConfig]);

  // --- Load External Libraries Dynamically ---
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'),
    ]).then(() => {
      setLibsLoaded(true);
    }).catch(err => {
      setErrors(prev => [...prev, "Failed to load jspdf library."]);
    });
  }, []);

  // --- Batch Load Google Fonts ---
  useEffect(() => {
    const chunkArray = (arr, size) => {
      const chunks = [];
      for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
      }
      return chunks;
    };

    const batches = chunkArray(GOOGLE_FONTS, 30);

    batches.forEach((batch, index) => {
      const families = batch
        .map(f => f.name.replace(/\s+/g, '+'))
        .join('&family=');

      const linkId = `google-fonts-batch-${index}`;
      if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${families}:wght@400;700&display=swap`;
        document.head.appendChild(link);
      }
    });

    setFontsLoaded(true);
  }, []);

  const handleTemplateUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (f) => setBaseTemplate(f.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (f) => {
        setAdditionalImages(prev => [...prev, {
          id: generateId(),
          url: f.target.result,
          x: 20,
          y: 20,
          width: 120,
          height: 120,
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const addTextAsset = () => {
    const newText = {
      id: generateId(),
      content: 'New Text Asset',
      x: 50,
      y: 60,
      fontSize: 20,
      color: '#000000',
      textAlign: 'center',
      fontWeight: 'normal',
      fontFamily: "'Roboto', sans-serif"
    };
    setAdditionalTexts(prev => [...prev, newText]);
    setSelectedElementId(newText.id);
  };

  const updateParticipants = (text) => {
    setParticipantInput(text);
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const parsed = lines.map(line => {
      const parts = line.split(',').map(s => s.trim());
      const name = parts[0] || '';
      const email = parts[1] || '';
      return { name, email };
    }).filter(p => p.name !== '');
    setParticipants(parsed);
  };

  const handleCsvImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (f) => updateParticipants(f.target.result);
    reader.readAsText(file);
  };

  const handleMouseDown = (id, type) => (e) => {
    e.preventDefault();
    setSelectedElementId(id);
    if (type === 'resize') setResizingId(id);
    else setDraggingId(id);
  };

  const handleMouseMove = useCallback((e) => {
    if (!draggingId && !resizingId) return;
    if (!canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    if (draggingId === 'participant-name') {
      setNameSettings(prev => ({ ...prev, x, y }));
    } else if (draggingId) {
      // Check if dragging image
      if (additionalImages.some(img => img.id === draggingId)) {
        setAdditionalImages(prev => prev.map(img =>
          img.id === draggingId ? { ...img, x, y } : img
        ));
      } else {
        // Must be dragging text asset
        setAdditionalTexts(prev => prev.map(txt =>
          txt.id === draggingId ? { ...txt, x, y } : txt
        ));
      }
    }

    if (resizingId) {
      const mouseX = e.clientX - rect.left;
      setAdditionalImages(prev => prev.map(img => {
        if (img.id === resizingId) {
          const imgStartX = (img.x / 100) * rect.width;
          const newSize = Math.max(30, mouseX - imgStartX + (img.width / 2));
          return { ...img, width: newSize, height: newSize };
        }
        return img;
      }));
    }
  }, [draggingId, resizingId, additionalImages]);

  const handleMouseUp = useCallback(() => {
    setDraggingId(null);
    setResizingId(null);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  // --- MANUAL CANVAS RENDERING FUNCTION ---
  const renderManualCanvas = async (participantIndex) => {
    const targetWidth = 2000;
    const participant = participants[participantIndex];

    // Use original image element to get ratio
    const baseImg = new Image();
    baseImg.src = baseTemplate;
    await new Promise(r => baseImg.onload = r);

    const aspectRatio = baseImg.height / baseImg.width;
    const targetHeight = targetWidth * aspectRatio;

    // Create offscreen canvas
    const canvas = document.createElement('canvas');
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext('2d');

    // 1. Draw Background (Template)
    ctx.drawImage(baseImg, 0, 0, targetWidth, targetHeight);

    const previewWidth = containerRef.current.clientWidth;
    const scaleFactor = targetWidth / previewWidth;

    // 2. Draw Additional Assets (Logo/Signature)
    for (const img of additionalImages) {
      const assetImg = new Image();
      assetImg.src = img.url;
      await new Promise(r => assetImg.onload = r);
      const drawX = (img.x / 100) * targetWidth;
      const drawY = (img.y / 100) * targetHeight;
      const drawW = img.width * scaleFactor;
      const drawH = img.height * scaleFactor;
      ctx.save();
      ctx.translate(drawX, drawY);
      ctx.drawImage(assetImg, -drawW / 2, -drawH / 2, drawW, drawH);
      ctx.restore();
    }

    // 3. Draw Additional Static Texts
    for (const txt of additionalTexts) {
      ctx.save();
      const textX = (txt.x / 100) * targetWidth;
      const textY = (txt.y / 100) * targetHeight;
      const scaledFontSize = txt.fontSize * scaleFactor;
      const fontFamilyClean = txt.fontFamily.replace(/'/g, "");
      ctx.font = `${txt.fontWeight} ${scaledFontSize}px ${fontFamilyClean}`;
      ctx.fillStyle = txt.color;
      ctx.textAlign = txt.textAlign;
      ctx.textBaseline = 'middle';
      ctx.fillText(txt.content, textX, textY);
      ctx.restore();
    }

    // 4. Draw Participant Text
    ctx.save();
    const yOffset = -2; // adjustment offset
    const textX = (nameSettings.x / 100) * targetWidth;
    const textY = ((nameSettings.y / 100) * targetHeight) + (yOffset * scaleFactor);
    const scaledFontSize = nameSettings.fontSize * scaleFactor;
    const fontFamilyClean = nameSettings.fontFamily.replace(/'/g, "");
    ctx.font = `${nameSettings.fontWeight} ${scaledFontSize}px ${fontFamilyClean}`;
    ctx.fillStyle = nameSettings.color;
    ctx.textAlign = nameSettings.textAlign;
    ctx.textBaseline = 'middle';
    ctx.fillText(participant?.name || "[Name]", textX, textY);
    ctx.restore();

    return canvas.toDataURL('image/png', 1.0);
  };

  const generateSinglePdf = async (index) => {
    setActiveParticipantIndex(index);
    const imgData = await renderManualCanvas(index);
    const baseImg = new Image();
    baseImg.src = baseTemplate;
    await new Promise(r => baseImg.onload = r);
    const orientation = baseImg.width > baseImg.height ? 'landscape' : 'portrait';
    const pdf = new window.jspdf.jsPDF({
      orientation: orientation,
      unit: 'px',
      format: [baseImg.width, baseImg.height]
    });
    pdf.addImage(imgData, 'PNG', 0, 0, baseImg.width, baseImg.height, '', 'FAST');
    return pdf.output('datauristring');
  };

  const handleSingleExport = async () => {
    if (!baseTemplate) return;
    setIsExporting(true);
    try {
      const dataUri = await generateSinglePdf(activeParticipantIndex);
      const p = participants[activeParticipantIndex] || { name: 'Preview', email: 'none' };
      const fileName = `${eventName.replace(/\s/g, '_')}__${p.name.replace(/\s/g, '_')}__${p.email}.pdf`;
      const link = document.createElement('a');
      link.href = dataUri;
      link.download = fileName;
      link.click();
    } catch (err) {
      console.error(err);
      setErrors(["Single export failed."]);
    } finally {
      setIsExporting(false);
    }
  };

  const handleSingleEmail = async () => {
    if (!emailConfig.apiUrl) {
      setErrors(["API URL is required in the Email tab."]);
      return;
    }
    const participant = participants[activeParticipantIndex];
    if (!participant || !participant.email) {
      setErrors(["Current participant has no email address."]);
      return;
    }
    setIsSending(true);
    setErrors([]);
    try {
      const pdfDataUri = await generateSinglePdf(activeParticipantIndex);
      const base64Pdf = pdfDataUri.split(',')[1];
      const fileName = `${eventName.replace(/\s/g, '_')}__${participant.name.replace(/\s/g, '_')}.pdf`;
      const resolveVars = (str) => str.replace(/{name}/g, participant.name).replace(/{email}/g, participant.email).replace(/{event}/g, eventName);
      const payload = {
        to: participant.email,
        name: participant.name,
        event: eventName,
        subject: resolveVars(emailConfig.subject),
        body: resolveVars(emailConfig.body),
        fileName: fileName,
        pdf: base64Pdf
      };
      const requestHeaders = { 'Content-Type': 'application/json' };
      emailConfig.headers.forEach(h => { if (h.key.trim()) requestHeaders[h.key.trim()] = h.value; });
      const response = await fetch(emailConfig.apiUrl, { method: 'POST', mode: 'cors', headers: requestHeaders, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error(`API Error: ${response.status}`);
    } catch (err) {
      setErrors([err.message.includes('Failed to fetch') ? "Connection failed (CORS Error)." : err.message]);
    } finally { setIsSending(false); }
  };

  const exportPDFs = async () => {
    const errs = [];
    if (!eventName) errs.push("Event Name is required");
    if (!baseTemplate) errs.push("Certificate Design is required");
    if (participants.length === 0) errs.push("Participant list is empty");
    if (errs.length > 0) { setErrors(errs); return; }
    setIsExporting(true);
    setExportProgress(0);
    try {
      for (let i = 0; i < participants.length; i++) {
        const dataUri = await generateSinglePdf(i);
        const p = participants[i];
        const fileName = `${eventName.replace(/\s/g, '_')}__${p.name.replace(/\s/g, '_')}__${p.email}.pdf`;
        const link = document.createElement('a');
        link.href = dataUri;
        link.download = fileName;
        link.click();
        setExportProgress(Math.round(((i + 1) / participants.length) * 100));
      }
    } catch (err) { setErrors(["Export failed."]); } finally { setIsExporting(false); }
  };

  const sendBulkEmails = async () => {
    if (!emailConfig.apiUrl) return;
    setIsSending(true);
    setExportProgress(0);
    try {
      for (let i = 0; i < participants.length; i++) {
        const participant = participants[i];
        if (!participant.email) continue;
        const pdfDataUri = await generateSinglePdf(i);
        const base64Pdf = pdfDataUri.split(',')[1];
        const resolveVars = (str) => str.replace(/{name}/g, participant.name).replace(/{email}/g, participant.email).replace(/{event}/g, eventName);
        const payload = { to: participant.email, name: participant.name, event: eventName, subject: resolveVars(emailConfig.subject), body: resolveVars(emailConfig.body), fileName: `${eventName}__${participant.name}.pdf`, pdf: base64Pdf };
        const requestHeaders = { 'Content-Type': 'application/json' };
        emailConfig.headers.forEach(h => { if (h.key.trim()) requestHeaders[h.key.trim()] = h.value; });
        await fetch(emailConfig.apiUrl, { method: 'POST', mode: 'cors', headers: requestHeaders, body: JSON.stringify(payload) });
        setExportProgress(Math.round(((i + 1) / participants.length) * 100));
      }
    } catch (err) { setErrors([err.message]); } finally { setIsSending(false); }
  };

  const updateHeader = (id, field, value) => {
    setEmailConfig(prev => ({ ...prev, headers: prev.headers.map(h => h.id === id ? { ...h, [field]: value } : h) }));
  };

  const filteredFonts = GOOGLE_FONTS.filter(f => f.name.toLowerCase().includes(fontSearch.toLowerCase()));

  const handleColorTextChange = (val) => {
    let formatted = val;
    if (formatted.length > 0 && formatted[0] !== '#') formatted = '#' + formatted;
    if (/^#[0-9A-Fa-f]{0,6}$/.test(formatted)) {
      updateSelectedElementSettings({ color: formatted });
    }
  };

  const selectedSettings = getSelectedElementSettings();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col md:flex-row font-sans text-slate-900">
      {/* Sidebar */}
      <div className="w-full md:w-96 bg-white border-r border-gray-200 flex flex-col h-screen shrink-0 shadow-lg overflow-hidden">
        <header className="p-6 border-b border-gray-100 shrink-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <FileText className="w-6 h-6" />
              </div>
              <h1 className="text-xl font-bold">CertifyGen Pro</h1>
            </div>
            <div className="flex gap-1 bg-white/20 p-1 rounded-lg backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('design')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1 ${activeTab === 'design' ? 'bg-white text-indigo-600 shadow' : 'text-white/80 hover:text-white'}`}
              >
                <ImageIcon className="w-3" /> Design
              </button>
              <button
                onClick={() => setActiveTab('email')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1 ${activeTab === 'email' ? 'bg-white text-indigo-600 shadow' : 'text-white/80 hover:text-white'}`}
              >
                <Mail className="w-3" /> Email
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm">
          {activeTab === 'design' ? (
            <>
              {/* Event & Template */}
              <div className="grid grid-cols-1 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Event Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50" value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="Event Title" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Template</label>
                  <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-4 text-center bg-gray-50 hover:border-indigo-400 transition-colors">
                    <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleTemplateUpload} />
                    <Upload className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                    <span className="text-xs text-gray-600">{baseTemplate ? "Replace template" : "Upload template"}</span>
                  </div>
                </div>
              </div>

              {/* Text Assets Management */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Text Assets</label>
                  <button
                    onClick={addTextAsset}
                    className="text-[10px] bg-indigo-600 text-white px-2 py-1 rounded font-bold flex items-center gap-1 hover:bg-indigo-700"
                  >
                    <Plus className="w-3 h-3" /> ADD TEXT
                  </button>
                </div>
                <div className="space-y-2">
                  {/* Main Participant Name element - always present */}
                  <div
                    onClick={() => setSelectedElementId('participant-name')}
                    className={`p-2 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${selectedElementId === 'participant-name' ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-gray-100 hover:border-gray-300'}`}
                  >
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-indigo-500" />
                      <span className="text-xs font-medium">Participant Name</span>
                    </div>
                    <span className="text-[10px] text-gray-400">Dynamic</span>
                  </div>
                  {/* Additional Text Assets */}
                  {additionalTexts.map(txt => (
                    <div
                      key={txt.id}
                      onClick={() => setSelectedElementId(txt.id)}
                      className={`p-2 rounded-lg border cursor-pointer transition-all group flex items-center justify-between ${selectedElementId === txt.id ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-gray-100 hover:border-gray-300'}`}
                    >
                      <div className="flex items-center gap-2 overflow-hidden flex-1">
                        <TypeIcon className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <input
                          className="bg-transparent border-none outline-none text-xs w-full font-medium"
                          value={txt.content}
                          onChange={(e) => setAdditionalTexts(prev => prev.map(t => t.id === txt.id ? { ...t, content: e.target.value } : t))}
                        />
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); setAdditionalTexts(prev => prev.filter(t => t.id !== txt.id)); setSelectedElementId('participant-name'); }}
                        className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Overlay Assets (Images) */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Image Assets</label>
                <div className="flex flex-wrap gap-2">
                  <label className="w-12 h-12 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                    <Plus className="w-4 h-4 text-gray-400" />
                    <input type="file" multiple accept="image/*" className="hidden" onChange={handleImageUpload} />
                  </label>
                  {additionalImages.map(img => (
                    <div key={img.id} className="relative w-12 h-12 group">
                      <img src={img.url} className="w-full h-full object-cover rounded-xl border border-gray-200" alt="asset" />
                      <button onClick={() => setAdditionalImages(prev => prev.filter(i => i.id !== img.id))} className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"><X className="w-2.5" /></button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Participants */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  <label>Recipient List</label>
                  <label className="text-indigo-600 cursor-pointer hover:underline">Import CSV <input type="file" accept=".csv,.txt" className="hidden" onChange={handleCsvImport} /></label>
                </div>
                <textarea rows="3" placeholder="Name, Email" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs font-mono outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50" value={participantInput} onChange={(e) => updateParticipants(e.target.value)} />
              </div>

              {/* Typography Studio - Dynamic Context */}
              <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl space-y-4 border border-indigo-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-indigo-800 text-xs"><Type className="w-4 h-4" /> Styling Settings</div>
                  <span className="text-[9px] bg-indigo-200 text-indigo-700 px-2 py-0.5 rounded-full font-bold uppercase">
                    {selectedElementId === 'participant-name' ? 'Name' : 'Text Block'}
                  </span>
                </div>

                {/* Font Picker */}
                <div className="space-y-1 relative">
                  <div
                    onClick={() => setFontPickerOpen(!fontPickerOpen)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white shadow-sm flex items-center justify-between cursor-pointer hover:border-indigo-300 transition-all overflow-hidden"
                  >
                    <span style={{ fontFamily: selectedSettings?.fontFamily }} className="truncate text-xs font-medium">
                      {GOOGLE_FONTS.find(f => f.family === selectedSettings?.fontFamily)?.name || "Select Font"}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${fontPickerOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {fontPickerOpen && (
                    <div className="absolute z-50 left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="p-2 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
                        <Search className="w-3.5 h-3.5 text-gray-400" />
                        <input autoFocus type="text" placeholder="Search..." className="bg-transparent text-xs w-full outline-none" value={fontSearch} onChange={(e) => setFontSearch(e.target.value)} />
                      </div>
                      <div className="max-h-52 overflow-y-auto">
                        {filteredFonts.map((font) => (
                          <div
                            key={font.name}
                            onClick={() => { updateSelectedElementSettings({ fontFamily: font.family }); setFontPickerOpen(false); }}
                            className={`px-3 py-2 cursor-pointer transition-colors border-b border-gray-50 last:border-0 hover:bg-indigo-50 ${selectedSettings?.fontFamily === font.family ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700'}`}
                          >
                            <div className="text-[9px] text-gray-400 mb-0.5">{font.name}</div>
                            <div style={{ fontFamily: font.family }} className="text-sm truncate">Preview Text</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <span className="text-[9px] text-gray-500 font-bold uppercase">Size</span>
                    <input type="number" className="w-full p-2 border border-gray-200 rounded-lg text-xs outline-none" value={selectedSettings?.fontSize || 20} onChange={(e) => updateSelectedElementSettings({ fontSize: parseInt(e.target.value) || 12 })} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] text-gray-500 font-bold uppercase">Color</span>
                    <div className="flex items-center gap-1.5">
                      <input type="color" className="w-7 h-7 p-0.5 border border-gray-200 rounded-lg cursor-pointer bg-white shrink-0" value={selectedSettings?.color || '#000000'} onChange={(e) => updateSelectedElementSettings({ color: e.target.value })} />
                      <input type="text" readOnly className="w-full p-1.5 border border-gray-200 rounded-lg text-[9px] font-mono outline-none bg-gray-200 uppercase" value={selectedSettings?.color || ''} onChange={(e) => handleColorTextChange(e.target.value)} />
                    </div>
                  </div>
                </div>

                {/* <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                  {['left', 'center', 'right'].map(a => (
                    <button key={a} onClick={() => updateSelectedElementSettings({ textAlign: a })} className={`flex-1 p-2 transition-colors ${selectedSettings?.textAlign === a ? 'bg-indigo-600 text-white' : 'bg-white text-gray-500'}`}>
                      {a === 'left' ? <AlignLeft className="w-3.5 h-3.5 mx-auto" /> : a === 'center' ? <AlignCenter className="w-3.5 h-3.5 mx-auto" /> : <AlignRight className="w-3.5 h-3.5 mx-auto" />}
                    </button>
                  ))}
                </div> */}
              </div>

              <button disabled={isExporting || !libsLoaded} onClick={exportPDFs} className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-3 ${isExporting || !libsLoaded ? 'bg-gray-400' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'}`}>
                {isExporting ? <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</> : <><Download className="w-5 h-5" /> Export All ({participants.length})</>}
              </button>
            </>
          ) : (
            <>
              {/* Email Tab */}
              <div className="space-y-5">
                <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 font-bold text-emerald-800"><Globe className="w-4 h-4" /> API Configuration</div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-emerald-600">Target API URL</label>
                    <input type="url" placeholder="https://api.site.com/send" className="w-full px-4 py-3 rounded-xl border border-emerald-200 text-sm outline-none font-mono bg-emerald-50" value={emailConfig.apiUrl} onChange={(e) => setEmailConfig(prev => ({ ...prev, apiUrl: e.target.value }))} />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase text-emerald-600"><label>Headers</label><button onClick={addHeader} className="bg-white text-emerald-600 px-2 py-0.5 rounded border border-emerald-200">Add Header</button></div>
                    <div className="space-y-2">{emailConfig.headers.map((h) => (<div key={h.id} className="flex gap-1 items-start"><div className="flex-1 space-y-1"><input type="text" placeholder="Key" className="w-full px-2 py-1.5 rounded bg-white border border-emerald-100 text-xs font-mono" value={h.key} onChange={(e) => updateHeader(h.id, 'key', e.target.value)} /><input type="text" placeholder="Value" className="w-full px-2 py-1.5 rounded bg-white border border-emerald-100 text-xs font-mono" value={h.value} onChange={(e) => updateHeader(h.id, 'value', e.target.value)} /></div><button onClick={() => setEmailConfig(prev => ({ ...prev, headers: prev.headers.filter(x => x.id !== h.id) }))} className="p-1 text-emerald-300 hover:text-red-500"><X className="w-4 h-4" /></button></div>))}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1"><label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Subject</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none bg-gray-50" value={emailConfig.subject} onChange={(e) => setEmailConfig(prev => ({ ...prev, subject: e.target.value }))} /></div>
                  <div className="space-y-1"><label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Body</label><textarea rows="5" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none bg-gray-50" value={emailConfig.body} onChange={(e) => setEmailConfig(prev => ({ ...prev, body: e.target.value }))} /></div>
                </div>
              </div>
              <button disabled={isSending || !emailConfig.apiUrl} onClick={sendBulkEmails} className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${isSending || !emailConfig.apiUrl ? 'bg-gray-400' : 'bg-gradient-to-r from-emerald-600 to-teal-600'}`}>
                {isSending ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <><Send className="w-5 h-5" /> Bulk Send Email</>}
              </button>
            </>
          )}
          {errors.length > 0 && <div className="p-3 bg-red-50 text-red-600 text-xs rounded-xl border border-red-100">{errors.map((e, i) => <p key={i}>• {e}</p>)}</div>}
        </div>
      </div>

      {/* Main Preview Area */}
      <main className="flex-1 p-8 flex flex-col items-center justify-start bg-gradient-to-br from-gray-50 to-gray-100 overflow-auto relative">
        {baseTemplate ? (
          <div className="w-full max-w-5xl flex flex-col items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-4 bg-white px-4 py-2.5 rounded-full shadow-md border border-gray-200">
                <button disabled={activeParticipantIndex === 0} onClick={() => setActiveParticipantIndex(p => p - 1)} className="p-1 disabled:opacity-20 transition-opacity hover:text-indigo-600"><ChevronLeft className="w-4 h-4" /></button>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-tight">Record {activeParticipantIndex + 1} / {participants.length || 1}</span>
                <button disabled={activeParticipantIndex >= participants.length - 1} onClick={() => setActiveParticipantIndex(p => p + 1)} className="p-1 disabled:opacity-20 transition-opacity hover:text-indigo-600"><ChevronRight className="w-4 h-4" /></button>
                <div className="ml-2 px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-[10px] font-bold uppercase truncate max-w-[120px]">{participants[activeParticipantIndex]?.name || "Preview"}</div>
              </div>

              <div className="flex gap-2">
                <button onClick={handleSingleExport} disabled={isExporting} className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 text-xs font-bold disabled:bg-gray-400">
                  {isExporting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />} Export Current
                </button>
                <button onClick={handleSingleEmail} disabled={isSending || !emailConfig.apiUrl} className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-full shadow-md hover:bg-emerald-700 text-xs font-bold disabled:bg-gray-400">
                  {isSending ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Mail className="w-3.5 h-3.5" />} Email Current
                </button>
              </div>
            </div>

            <div
              ref={containerRef}
              className="relative bg-white shadow-2xl touch-none select-none overflow-hidden rounded-xl border border-gray-200"
              style={{ width: '100%', maxWidth: '850px', aspectRatio: '1.414/1' }}
            >
              <div ref={canvasRef} className="w-full h-full relative">
                <img src={baseTemplate} className="w-full h-full object-contain pointer-events-none" alt="Template" />

                {/* Dynamic Participant Name */}
                <div
                  onMouseDown={handleMouseDown('participant-name', 'drag')}
                  className={`absolute cursor-move group px-2 py-1 ${draggingId === 'participant-name' ? 'ring-2 ring-indigo-500 shadow-xl' : (selectedElementId === 'participant-name' ? 'ring-2 ring-indigo-400' : 'hover:ring-1 hover:ring-indigo-300')}`}
                  style={{
                    left: `${nameSettings.x}%`,
                    top: `${nameSettings.y}%`,
                    transform: `translate(-${nameSettings.textAlign === 'center' ? '50' : nameSettings.textAlign === 'right' ? '100' : '0'}%, -50%)`,
                    fontSize: `${nameSettings.fontSize}px`,
                    color: nameSettings.color,
                    textAlign: nameSettings.textAlign,
                    fontWeight: nameSettings.fontWeight,
                    fontFamily: nameSettings.fontFamily,
                    whiteSpace: 'nowrap',
                    zIndex: 20
                  }}
                >
                  {participants[activeParticipantIndex]?.name || "[Participant Name]"}
                  <Move className="absolute -top-5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity export-hide" />
                </div>

                {/* Additional Text Assets */}
                {additionalTexts.map(txt => (
                  <div
                    key={txt.id}
                    onMouseDown={handleMouseDown(txt.id, 'drag')}
                    className={`absolute cursor-move group px-2 py-1 ${draggingId === txt.id ? 'ring-2 ring-indigo-500 shadow-xl' : (selectedElementId === txt.id ? 'ring-2 ring-indigo-400' : 'hover:ring-1 hover:ring-indigo-300')}`}
                    style={{
                      left: `${txt.x}%`,
                      top: `${txt.y}%`,
                      transform: `translate(-${txt.textAlign === 'center' ? '50' : txt.textAlign === 'right' ? '100' : '0'}%, -50%)`,
                      fontSize: `${txt.fontSize}px`,
                      color: txt.color,
                      textAlign: txt.textAlign,
                      fontWeight: txt.fontWeight,
                      fontFamily: txt.fontFamily,
                      whiteSpace: 'nowrap',
                      zIndex: 15
                    }}
                  >
                    {txt.content}
                    <Move className="absolute -top-5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity export-hide" />
                  </div>
                ))}

                {/* Overlay Image Assets */}
                {additionalImages.map(img => (
                  <div
                    key={img.id}
                    onMouseDown={handleMouseDown(img.id, 'drag')}
                    className={`absolute cursor-move group ${draggingId === img.id ? 'ring-2 ring-indigo-500 shadow-xl' : 'hover:ring-1 hover:ring-slate-300'}`}
                    style={{
                      left: `${img.x}%`,
                      top: `${img.y}%`,
                      width: `${img.width}px`,
                      height: `${img.height}px`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 10
                    }}
                  >
                    <img src={img.url} className="w-full h-full object-contain pointer-events-none" alt="Asset" />
                    <div onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(img.id, 'resize')(e); }} className="absolute bottom-0 right-0 w-4 h-4 bg-indigo-500 cursor-nwse-resize opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-tl shadow-sm transition-opacity export-hide"><Maximize className="w-2.5 h-2.5 text-white" /></div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-gray-400 font-medium italic">Click any text or image to start editing its specific styles and position.</p>
          </div>
        ) : (
          <div className="text-center opacity-70 flex flex-col items-center bg-white/50 p-12 rounded-2xl backdrop-blur-sm">
            <ImageIcon className="w-24 h-24 mb-6 text-indigo-400" />
            <h2 className="text-2xl font-bold text-slate-700">Waiting for Template...</h2>
            <p className="text-base mt-3 text-slate-500 max-w-md">Upload your design base to start customizing certificates.</p>
            <div className="mt-6 relative border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center bg-slate-50 hover:border-indigo-400 transition-colors">
              <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleTemplateUpload} />
              <span className="text-lg text-slate-600 flex items-center justify-center gap-3">
                <Upload className="w-6 h-6" /> Click to upload template
              </span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;