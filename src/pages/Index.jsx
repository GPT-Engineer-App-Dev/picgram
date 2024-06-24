import { Container, VStack, Box, Heading, Input, Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [photos, setPhotos] = useState([]);
  const [newPhoto, setNewPhoto] = useState("");
  const [caption, setCaption] = useState("");

  const handleUpload = () => {
    if (newPhoto && caption) {
      setPhotos([{ url: newPhoto, caption }, ...photos]);
      setNewPhoto("");
      setCaption("");
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">Photo Sharing Platform</Heading>
        
        <Box as="form" width="100%" onSubmit={(e) => { e.preventDefault(); handleUpload(); }}>
          <VStack spacing={4}>
            <Input 
              placeholder="Photo URL" 
              value={newPhoto} 
              onChange={(e) => setNewPhoto(e.target.value)} 
            />
            <Input 
              placeholder="Caption" 
              value={caption} 
              onChange={(e) => setCaption(e.target.value)} 
            />
            <Button colorScheme="blue" type="submit">Upload Photo</Button>
          </VStack>
        </Box>

        <VStack spacing={6} width="100%">
          {photos.map((photo, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
              <Image src={photo.url} alt={photo.caption} />
              <Box p={4}>
                <Text>{photo.caption}</Text>
              </Box>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;