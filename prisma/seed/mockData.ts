import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('6aae3621-4e5f-44ff-979b-7c81c1fa0417', '1Thomas.Wintheiser94@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv789012', false, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('6a03f6ed-9f5e-401c-a254-aa6bc814851e', '9Julius.Gulgowski@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv123456', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('fa2f9e81-cdb0-432e-933d-c7e2f06bf797', '17Marcelle.Littel-OReilly27@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=19', 'inv123456', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('c9fb8009-932d-4e59-bee3-e42747700e61', '25Schuyler.Johnston@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inv789012', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('f5457a4f-1747-45d0-a5b8-607dd4fa07a9', '33Christina_Okuneva@yahoo.com', 'Susan Lee', 'https://i.imgur.com/YfJQV5z.png?id=35', 'inv654321', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('22a784ef-ec9c-4d1e-9d4e-00a852c862a4', '41Tiana_Goldner80@yahoo.com', 'Susan Lee', 'https://i.imgur.com/YfJQV5z.png?id=43', 'inv210987', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('b04035f8-a616-49f0-87d8-00a6d757d4b8', '49Fred_Schoen89@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inv789012', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('1aace54d-caba-4cde-a24f-a06e40d180ee', '65Adolph42@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=67', 'inv654321', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('475d863b-fc20-42ba-8f53-7a4216f730be', '73Mallory82@hotmail.com', 'Susan Lee', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv654321', false, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('91391ecb-b40e-492d-ae73-56f7d143ada7', 'k9l8m7n6o5p4q3r2s1t0', '{"ascit":"ater","aveho":"vestigium","civis":"ciminatio"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('59c85b34-3d95-45cb-ad58-6daff4d950ee', 'a1b2c3d4e5f6g7h8i9j0', '{"accusantium":"verecundia","defluo":"thymum","audax":"brevis","depromo":"attero"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('2b78f688-1061-4221-85b0-7c7e790f657b', 'k9l8m7n6o5p4q3r2s1t0', '{"patrocinor":"vaco","asper":"aureus","vicissitudo":"volva","accusamus":"dicta","inflammatio":"quas"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('3d86dc2c-eaed-40ce-b214-1bbc67a0de56', 'z9y8x7w6v5u4t3s2r1q0', '{"curtus":"demulceo","doloremque":"uterque","cohaero":"suppellex"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('9d48027f-2b6a-4a44-b834-8bb70d72e4ef', 'k9l8m7n6o5p4q3r2s1t0', '{"bellicus":"abscido","adstringo":"vicinus","creptio":"derelinquo","succedo":"cumque"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('1571db9a-cdaa-4897-b6e6-822690e2de76', 'k9l8m7n6o5p4q3r2s1t0', '{"aiunt":"somnus","decimus":"amaritudo","theatrum":"considero","adduco":"caecus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('f07a11a8-035f-419b-8810-80381349e013', 'z9y8x7w6v5u4t3s2r1q0', '{"adeo":"curatio","autus":"cur","commemoro":"explicabo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('adf48638-8617-4467-af49-f9960e1e201b', 'z9y8x7w6v5u4t3s2r1q0', '{"officiis":"brevis","cruciamentum":"via","cunae":"accusamus","voveo":"perferendis"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('4bb7a7a6-e081-44e6-8b38-6536134fd40d', 'z9y8x7w6v5u4t3s2r1q0', '{"currus":"censura","patior":"tandem","doloribus":"numquam"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('5a1fa0b0-a4c6-4297-a749-5e8b62bd077f', 'k9l8m7n6o5p4q3r2s1t0', '{"tum":"usus","conqueror":"laborum","tertius":"consuasor","tepesco":"credo"}'::jsonb);

INSERT INTO "Platform" ("id", "name", "description") VALUES ('5300023d-9b44-412d-8d1f-790b4f2cc041', 'Facebook', 'A microblogging and social networking service.');
INSERT INTO "Platform" ("id", "name", "description") VALUES ('aa6bb256-e2ca-437e-bd03-2c0afd903985', 'WhatsApp', 'A professional networking platform.');
INSERT INTO "Platform" ("id", "name", "description") VALUES ('ee64de9b-c468-4acc-b439-cab14e698d64', 'LinkedIn', 'A social media platform for connecting with friends and family.');
INSERT INTO "Platform" ("id", "name", "description") VALUES ('b74c7b36-c614-40e8-bd87-c8b55dffd412', 'Instagram', 'A photo and video sharing social networking service.');
INSERT INTO "Platform" ("id", "name", "description") VALUES ('d25febe0-2c65-44b5-a11e-c43a5b8b6877', 'LinkedIn', 'A photo and video sharing social networking service.');
INSERT INTO "Platform" ("id", "name", "description") VALUES ('49ba6252-91b9-47d6-919f-4df9458659eb', 'WhatsApp', 'A professional networking platform.');
INSERT INTO "Platform" ("id", "name", "description") VALUES ('549ba870-d4d3-4dd4-a4a8-53c9db1173f3', 'WhatsApp', 'A photo and video sharing social networking service.');
INSERT INTO "Platform" ("id", "name", "description") VALUES ('c8b47107-c1a4-4914-8daa-744fb5530334', 'Twitter', 'A messaging platform for personal and business communication.');
INSERT INTO "Platform" ("id", "name", "description") VALUES ('d3853a4a-ea91-42e8-a6c3-a77476a711df', 'LinkedIn', 'A professional networking platform.');
INSERT INTO "Platform" ("id", "name", "description") VALUES ('65b7c4b4-568f-434d-81fc-27c01d4dc8ab', 'LinkedIn', 'A professional networking platform.');

INSERT INTO "Integration" ("id", "name", "description", "platformId") VALUES ('fe82d929-778b-47b1-9214-73e502c95f6f', 'Email Integration', 'Engage with customers on Facebook Messenger to boost your outreach.', '65b7c4b4-568f-434d-81fc-27c01d4dc8ab');
INSERT INTO "Integration" ("id", "name", "description", "platformId") VALUES ('a0327d0f-9bb2-4c7d-bc64-fb72f1b2e0d4', 'WhatsApp Integration', 'Engage with customers on Facebook Messenger to boost your outreach.', '65b7c4b4-568f-434d-81fc-27c01d4dc8ab');
INSERT INTO "Integration" ("id", "name", "description", "platformId") VALUES ('28bce324-f3a7-4c6e-96b7-0ac002e9f4d4', 'WhatsApp Integration', 'Engage with customers on Facebook Messenger to boost your outreach.', 'd3853a4a-ea91-42e8-a6c3-a77476a711df');
INSERT INTO "Integration" ("id", "name", "description", "platformId") VALUES ('d936b445-1de4-4172-bfcb-b34c7b842c70', 'WhatsApp Integration', 'Engage with customers on Facebook Messenger to boost your outreach.', 'c8b47107-c1a4-4914-8daa-744fb5530334');
INSERT INTO "Integration" ("id", "name", "description", "platformId") VALUES ('b7de3a19-f2f6-4e27-abfa-575a41b3b3ba', 'Facebook Messenger Integration', 'Automate email responses and lead generation with our email integration.', 'c8b47107-c1a4-4914-8daa-744fb5530334');
INSERT INTO "Integration" ("id", "name", "description", "platformId") VALUES ('ec55a067-9bc2-4b82-8aaf-baa31b8678b9', 'WhatsApp Integration', 'Automate email responses and lead generation with our email integration.', 'c8b47107-c1a4-4914-8daa-744fb5530334');
INSERT INTO "Integration" ("id", "name", "description", "platformId") VALUES ('4f0fc4a6-51df-4cbf-9326-c3618578119c', 'Facebook Messenger Integration', 'Seamlessly connect with users on WhatsApp for realtime communication.', 'aa6bb256-e2ca-437e-bd03-2c0afd903985');
INSERT INTO "Integration" ("id", "name", "description", "platformId") VALUES ('0951acc1-0748-47fd-b7d3-775036f59258', 'Instagram Direct Integration', 'Seamlessly connect with users on WhatsApp for realtime communication.', 'c8b47107-c1a4-4914-8daa-744fb5530334');
INSERT INTO "Integration" ("id", "name", "description", "platformId") VALUES ('e016120a-6532-429e-a708-94a38ec3197f', 'Instagram Direct Integration', 'Integrate with Slack to streamline internal and external communications.', '5300023d-9b44-412d-8d1f-790b4f2cc041');
INSERT INTO "Integration" ("id", "name", "description", "platformId") VALUES ('d0ae8768-89e9-4741-9ffa-249025872820', 'Slack Integration', 'Automate email responses and lead generation with our email integration.', 'd3853a4a-ea91-42e8-a6c3-a77476a711df');

INSERT INTO "Agent" ("id", "name", "description", "userId") VALUES ('45d6db38-ea0c-4923-a57b-8cbac62d5cb8', 'Sales Ninja', 'Expert in driving marketing campaigns', 'fa2f9e81-cdb0-432e-933d-c7e2f06bf797');
INSERT INTO "Agent" ("id", "name", "description", "userId") VALUES ('4b1d792b-7662-4970-8c91-3837bd5616d0', 'Sales Ninja', 'Specialist in closing sales deals', 'f5457a4f-1747-45d0-a5b8-607dd4fa07a9');
INSERT INTO "Agent" ("id", "name", "description", "userId") VALUES ('a5cd3068-5647-49a0-9f32-c0b1c164ac1c', 'Support Maestro', 'Master at generating highquality leads', '22a784ef-ec9c-4d1e-9d4e-00a852c862a4');
INSERT INTO "Agent" ("id", "name", "description", "userId") VALUES ('f0c7a023-9f50-4107-9afe-71c21aed6af3', 'Sales Ninja', 'Skilled in offering exceptional support', '6aae3621-4e5f-44ff-979b-7c81c1fa0417');
INSERT INTO "Agent" ("id", "name", "description", "userId") VALUES ('29d9f549-cc5f-4af9-902a-979e37ebba28', 'Marketing Guru', 'Expert in driving marketing campaigns', '22a784ef-ec9c-4d1e-9d4e-00a852c862a4');
INSERT INTO "Agent" ("id", "name", "description", "userId") VALUES ('4581d5c2-944a-4ea0-ad51-a70661db5f0c', 'Lead Gen Wizard', 'Specialist in closing sales deals', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Agent" ("id", "name", "description", "userId") VALUES ('66cd07b5-0e14-411c-a449-5195009129af', 'Sales Ninja', 'Specialist in closing sales deals', '6a03f6ed-9f5e-401c-a254-aa6bc814851e');
INSERT INTO "Agent" ("id", "name", "description", "userId") VALUES ('765f823d-3e5d-4d30-8a6d-ddb8b965929f', 'Marketing Guru', 'Expert in driving marketing campaigns', '22a784ef-ec9c-4d1e-9d4e-00a852c862a4');
INSERT INTO "Agent" ("id", "name", "description", "userId") VALUES ('62647114-08cc-442f-97aa-9ee19e1d01c7', 'Lead Gen Wizard', 'Master at generating highquality leads', 'f5457a4f-1747-45d0-a5b8-607dd4fa07a9');
INSERT INTO "Agent" ("id", "name", "description", "userId") VALUES ('85b2bf1d-2ad4-46dd-935a-4bf5dad2a45b', 'Customer Care Pro', 'Expert in driving marketing campaigns', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('df4bac5a-b9bd-4ae5-ac95-0d8d7289dc90', 'Customer Support Bot', 'Hello Ready to boost your sales', '475d863b-fc20-42ba-8f53-7a4216f730be');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('385aed9e-5a26-4cef-9293-63196572b5c8', 'Social Media Manager', 'Greetings How can I help with your marketing needs', '1aace54d-caba-4cde-a24f-a06e40d180ee');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('76faea5d-481f-40f3-83bf-ae62dfc6d83f', 'Marketing Agent', 'Hi there How can I assist you today', '6aae3621-4e5f-44ff-979b-7c81c1fa0417');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('40ebf4be-d9ed-4f09-b9f4-f5b216692bff', 'Lead Generation Assistant', 'Hey Lets manage your social media effectively.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('36709019-c284-448c-8544-97d52660362f', 'Lead Generation Assistant', 'Greetings How can I help with your marketing needs', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('5d404f45-b641-48fa-882f-06fb48c04522', 'Lead Generation Assistant', 'Hey Lets manage your social media effectively.', '6aae3621-4e5f-44ff-979b-7c81c1fa0417');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('21268908-1c46-4047-a902-1dbf419a9628', 'Marketing Agent', 'Greetings How can I help with your marketing needs', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('8f2b0ed3-02e0-4f42-97c4-e23b3fce0302', 'Sales Chatbot', 'Greetings How can I help with your marketing needs', '6a03f6ed-9f5e-401c-a254-aa6bc814851e');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('309541a7-15cc-4d6e-b5e2-6d3b4df82972', 'Marketing Agent', 'Hello Ready to boost your sales', 'f5457a4f-1747-45d0-a5b8-607dd4fa07a9');
INSERT INTO "Template" ("id", "name", "content", "userId") VALUES ('996228e5-dc52-4f1e-be86-0cab438a2a8f', 'Social Media Manager', 'Hello Ready to boost your sales', '1aace54d-caba-4cde-a24f-a06e40d180ee');

INSERT INTO "Conversation" ("id", "title", "userId", "agentId") VALUES ('1463a4da-056e-410b-b5b4-c133e743918f', 'Lead Generation Followup', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '765f823d-3e5d-4d30-8a6d-ddb8b965929f');
INSERT INTO "Conversation" ("id", "title", "userId", "agentId") VALUES ('511b7db4-a298-454b-8fd1-02152c3e09f8', 'Sales Pitch Discussion', 'f5457a4f-1747-45d0-a5b8-607dd4fa07a9', '62647114-08cc-442f-97aa-9ee19e1d01c7');
INSERT INTO "Conversation" ("id", "title", "userId", "agentId") VALUES ('b722dea0-6cfc-4b63-83d3-de07a9c21753', 'Marketing Campaign Analysis', '6a03f6ed-9f5e-401c-a254-aa6bc814851e', '66cd07b5-0e14-411c-a449-5195009129af');
INSERT INTO "Conversation" ("id", "title", "userId", "agentId") VALUES ('5ef4138a-9635-43ba-ab02-71a386410498', 'Customer Support Inquiry', '6aae3621-4e5f-44ff-979b-7c81c1fa0417', '85b2bf1d-2ad4-46dd-935a-4bf5dad2a45b');
INSERT INTO "Conversation" ("id", "title", "userId", "agentId") VALUES ('00105eec-aa90-46e7-8a35-3432a7324b24', 'Product Feedback Session', 'f5457a4f-1747-45d0-a5b8-607dd4fa07a9', 'a5cd3068-5647-49a0-9f32-c0b1c164ac1c');
INSERT INTO "Conversation" ("id", "title", "userId", "agentId") VALUES ('0b838835-a287-4177-a230-6f1508d0dbef', 'Customer Support Inquiry', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '85b2bf1d-2ad4-46dd-935a-4bf5dad2a45b');
INSERT INTO "Conversation" ("id", "title", "userId", "agentId") VALUES ('630c3d53-3dfd-4bc9-98e3-a17946649b5d', 'Customer Support Inquiry', '22a784ef-ec9c-4d1e-9d4e-00a852c862a4', '4b1d792b-7662-4970-8c91-3837bd5616d0');
INSERT INTO "Conversation" ("id", "title", "userId", "agentId") VALUES ('ef009dff-747f-428c-88be-2647f6d0daad', 'Product Feedback Session', 'b04035f8-a616-49f0-87d8-00a6d757d4b8', 'f0c7a023-9f50-4107-9afe-71c21aed6af3');
INSERT INTO "Conversation" ("id", "title", "userId", "agentId") VALUES ('b7b2f106-98fd-4ab1-a331-8b6500d2fdb4', 'Customer Support Inquiry', '475d863b-fc20-42ba-8f53-7a4216f730be', '62647114-08cc-442f-97aa-9ee19e1d01c7');
INSERT INTO "Conversation" ("id", "title", "userId", "agentId") VALUES ('d3a803e6-6d29-44a3-8470-8de47eb63182', 'Lead Generation Followup', '475d863b-fc20-42ba-8f53-7a4216f730be', 'a5cd3068-5647-49a0-9f32-c0b1c164ac1c');

INSERT INTO "Message" ("id", "content", "conversationId", "userId", "agentId") VALUES ('104ec7b2-37c3-4531-a42f-275dbd38317f', 'Hello How can I assist you today', '0b838835-a287-4177-a230-6f1508d0dbef', '1aace54d-caba-4cde-a24f-a06e40d180ee', '45d6db38-ea0c-4923-a57b-8cbac62d5cb8');
INSERT INTO "Message" ("id", "content", "conversationId", "userId", "agentId") VALUES ('162c3332-53a0-4085-b792-9c7d5997f31b', 'Thank you for reaching out to us.', '5ef4138a-9635-43ba-ab02-71a386410498', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '45d6db38-ea0c-4923-a57b-8cbac62d5cb8');
INSERT INTO "Message" ("id", "content", "conversationId", "userId", "agentId") VALUES ('8eaf29cb-e9f3-4342-9371-18c42c028484', 'Can you please provide more details', '0b838835-a287-4177-a230-6f1508d0dbef', '22a784ef-ec9c-4d1e-9d4e-00a852c862a4', 'a5cd3068-5647-49a0-9f32-c0b1c164ac1c');
INSERT INTO "Message" ("id", "content", "conversationId", "userId", "agentId") VALUES ('142f493e-19c0-416c-a308-b3b9d643cb9c', 'Thank you for reaching out to us.', 'b7b2f106-98fd-4ab1-a331-8b6500d2fdb4', 'b04035f8-a616-49f0-87d8-00a6d757d4b8', 'f0c7a023-9f50-4107-9afe-71c21aed6af3');
INSERT INTO "Message" ("id", "content", "conversationId", "userId", "agentId") VALUES ('b9d3a85f-af51-4c5f-a565-5dfac9426694', 'Hello How can I assist you today', 'b722dea0-6cfc-4b63-83d3-de07a9c21753', '6aae3621-4e5f-44ff-979b-7c81c1fa0417', '45d6db38-ea0c-4923-a57b-8cbac62d5cb8');
INSERT INTO "Message" ("id", "content", "conversationId", "userId", "agentId") VALUES ('94904ae5-1d2a-44f7-abb4-178114caa41d', 'Hello How can I assist you today', '5ef4138a-9635-43ba-ab02-71a386410498', '6a03f6ed-9f5e-401c-a254-aa6bc814851e', '29d9f549-cc5f-4af9-902a-979e37ebba28');
INSERT INTO "Message" ("id", "content", "conversationId", "userId", "agentId") VALUES ('b2c78900-7e53-499c-a49f-20013d8d405c', 'Thank you for reaching out to us.', '511b7db4-a298-454b-8fd1-02152c3e09f8', 'fa2f9e81-cdb0-432e-933d-c7e2f06bf797', 'a5cd3068-5647-49a0-9f32-c0b1c164ac1c');
INSERT INTO "Message" ("id", "content", "conversationId", "userId", "agentId") VALUES ('e64c60b1-cd78-4ce0-bacf-143bbf29a86b', 'Can you please provide more details', 'd3a803e6-6d29-44a3-8470-8de47eb63182', 'f5457a4f-1747-45d0-a5b8-607dd4fa07a9', 'f0c7a023-9f50-4107-9afe-71c21aed6af3');
INSERT INTO "Message" ("id", "content", "conversationId", "userId", "agentId") VALUES ('e30d7ce6-9370-4e43-a2ff-d15f37b3820c', 'Thank you for reaching out to us.', '00105eec-aa90-46e7-8a35-3432a7324b24', '1aace54d-caba-4cde-a24f-a06e40d180ee', '45d6db38-ea0c-4923-a57b-8cbac62d5cb8');
INSERT INTO "Message" ("id", "content", "conversationId", "userId", "agentId") VALUES ('5770bb85-1aac-4cb2-a798-d204ae4a4ba0', 'Our team will get back to you shortly.', '00105eec-aa90-46e7-8a35-3432a7324b24', '22a784ef-ec9c-4d1e-9d4e-00a852c862a4', 'f0c7a023-9f50-4107-9afe-71c21aed6af3');

INSERT INTO "Analytics" ("id", "metricName", "metricValue", "userId", "agentId", "conversationId") VALUES ('78bbe47d-8d83-4994-847a-69d583bc973a', 'User Engagement', '85', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '62647114-08cc-442f-97aa-9ee19e1d01c7', '630c3d53-3dfd-4bc9-98e3-a17946649b5d');
INSERT INTO "Analytics" ("id", "metricName", "metricValue", "userId", "agentId", "conversationId") VALUES ('a5a45d7b-1556-4d36-9d7f-6e0ad5548261', 'Response Time', '120 leads', 'f5457a4f-1747-45d0-a5b8-607dd4fa07a9', '29d9f549-cc5f-4af9-902a-979e37ebba28', '630c3d53-3dfd-4bc9-98e3-a17946649b5d');
INSERT INTO "Analytics" ("id", "metricName", "metricValue", "userId", "agentId", "conversationId") VALUES ('dccc0b11-35cb-44b8-894a-7569a362ce62', 'Customer Satisfaction', '85', '6a03f6ed-9f5e-401c-a254-aa6bc814851e', '765f823d-3e5d-4d30-8a6d-ddb8b965929f', '630c3d53-3dfd-4bc9-98e3-a17946649b5d');
INSERT INTO "Analytics" ("id", "metricName", "metricValue", "userId", "agentId", "conversationId") VALUES ('157073ff-145a-400d-bd52-cff00e0714c1', 'Response Time', '2.3s', 'b04035f8-a616-49f0-87d8-00a6d757d4b8', '85b2bf1d-2ad4-46dd-935a-4bf5dad2a45b', '1463a4da-056e-410b-b5b4-c133e743918f');
INSERT INTO "Analytics" ("id", "metricName", "metricValue", "userId", "agentId", "conversationId") VALUES ('7dbab3b5-7976-4c07-8881-6f0705a1de5e', 'Lead Generation', '85', '22a784ef-ec9c-4d1e-9d4e-00a852c862a4', '765f823d-3e5d-4d30-8a6d-ddb8b965929f', '00105eec-aa90-46e7-8a35-3432a7324b24');
INSERT INTO "Analytics" ("id", "metricName", "metricValue", "userId", "agentId", "conversationId") VALUES ('de41b628-a8bc-41da-8e1b-4b12c6b22b28', 'Lead Generation', '85', '475d863b-fc20-42ba-8f53-7a4216f730be', '4b1d792b-7662-4970-8c91-3837bd5616d0', 'd3a803e6-6d29-44a3-8470-8de47eb63182');
INSERT INTO "Analytics" ("id", "metricName", "metricValue", "userId", "agentId", "conversationId") VALUES ('85c3113d-d1c0-4484-b7fc-8d4a3456e812', 'Customer Satisfaction', '4.5', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'f0c7a023-9f50-4107-9afe-71c21aed6af3', '00105eec-aa90-46e7-8a35-3432a7324b24');
INSERT INTO "Analytics" ("id", "metricName", "metricValue", "userId", "agentId", "conversationId") VALUES ('9967a946-c338-40bb-8d66-4d448b7053b2', 'Conversion Rate', '120 leads', 'b04035f8-a616-49f0-87d8-00a6d757d4b8', '62647114-08cc-442f-97aa-9ee19e1d01c7', '00105eec-aa90-46e7-8a35-3432a7324b24');
INSERT INTO "Analytics" ("id", "metricName", "metricValue", "userId", "agentId", "conversationId") VALUES ('5570d711-a054-475d-9d4b-6a807e6b19f5', 'Lead Generation', '85', '475d863b-fc20-42ba-8f53-7a4216f730be', '4581d5c2-944a-4ea0-ad51-a70661db5f0c', '0b838835-a287-4177-a230-6f1508d0dbef');
INSERT INTO "Analytics" ("id", "metricName", "metricValue", "userId", "agentId", "conversationId") VALUES ('1f5539b9-0ee8-433c-9527-4fa6acf46aef', 'Lead Generation', '4.5', 'c9fb8009-932d-4e59-bee3-e42747700e61', 'f0c7a023-9f50-4107-9afe-71c21aed6af3', 'ef009dff-747f-428c-88be-2647f6d0daad');

INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('3f11c351-dfef-474f-adbf-2fc6560f492b', 'Enterprise', '2024-12-11T03:52:29.513Z', '2024-05-17T11:16:03.053Z', 'Pending', '22a784ef-ec9c-4d1e-9d4e-00a852c862a4');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('c70b665d-6b16-4f80-9632-0c3993b40c97', 'Premium', '2024-07-09T22:39:12.826Z', '2024-11-25T14:19:54.628Z', 'Expired', 'f5457a4f-1747-45d0-a5b8-607dd4fa07a9');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('449b5333-d2a9-453e-9610-5e3403cc1373', 'Basic', '2024-05-18T00:33:06.737Z', '2025-03-20T23:52:11.888Z', 'Expired', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('85995cff-e910-4e13-b2d5-a7b2614e392b', 'Basic', '2024-07-01T15:57:57.991Z', '2024-11-21T10:25:01.231Z', 'Inactive', 'fa2f9e81-cdb0-432e-933d-c7e2f06bf797');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('4b7a0b12-00bf-4332-b315-6cebd681c82a', 'Basic', '2024-03-22T20:18:08.631Z', '2024-06-01T02:50:33.183Z', 'Cancelled', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('bb707a33-9087-472c-80a8-3bef20b8d865', 'Premium', '2025-07-03T03:57:35.138Z', '2025-02-07T06:22:30.522Z', 'Pending', '6aae3621-4e5f-44ff-979b-7c81c1fa0417');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('42e5eee3-2f91-4ba2-aede-42a895d85d2b', 'Pro', '2024-12-15T23:34:24.709Z', '2025-04-21T07:50:17.337Z', 'Inactive', 'b04035f8-a616-49f0-87d8-00a6d757d4b8');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('1b99ac62-652e-4fd2-82b8-a4ce5224bc68', 'Starter', '2024-06-26T15:49:41.168Z', '2024-12-16T00:25:54.174Z', 'Cancelled', 'f5457a4f-1747-45d0-a5b8-607dd4fa07a9');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('9a471ce0-cd88-4fec-b820-e62032e5a823', 'Enterprise', '2024-08-20T02:51:58.173Z', '2024-10-13T12:12:12.420Z', 'Pending', 'f5457a4f-1747-45d0-a5b8-607dd4fa07a9');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('da7fecf9-a911-4f8d-bd89-72b8b3e57abe', 'Pro', '2023-10-08T18:43:26.529Z', '2024-11-19T02:18:40.049Z', 'Cancelled', '6a03f6ed-9f5e-401c-a254-aa6bc814851e');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
